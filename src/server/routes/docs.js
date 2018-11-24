const path = require('path')
const fs = require('fs-extra')
const KB = require('../util/kb')
const Git = require('simple-git/promise')
const isOkDoc = require('../util/isOkDoc')
const tryRmdir = require('../util/tryRmdir')
const requireUser = require('../util/requireUser')
const { aOk, notFound, serverError, userError } = require('../util/responses')
const {
  sortDocs,
  searchDocs,
  limitDocs,
  buildSortBy,
} = require('../../util/kbHelpers')

/**
 * sets up docs endpoint
 */
module.exports = function docs(app) {
  let git
  const {
    useGit,
    docsDir,
    cacheSize,
    maxDocSize,
    maxDocsLimit,
    defDocsLimit,
  } = app.config

  const kb = new KB({
    cacheSize,
    maxDocSize,
    kbPath: docsDir,
  })

  if (useGit) {
    git = Git(docsDir)
    kb.loaded.then(() => {
      const numDocs = Object.keys(kb.docs).length

      // check if git needs to be initialized in docs dir
      fs.stat(path.join(docsDir, '.git'), err => {
        if (err && err.code === 'ENOENT') {
          git.init().then(() => {
            git.addConfig('user.name', 'mykb')
            git.addConfig('user.email', 'mykb@localhost')
            if (numDocs === 0) return
            git.add('./*').then(() => git.commit('initial commit'))
          })
        }
      })
    })
  }

  // make sure user is logged in
  app.use('/docs*', requireUser)

  // handle getting docs
  app.get('/docs', (req, res) => {
    let docs
    const { query } = req

    if (query.id) {
      const doc = kb.docs[query.id]
      if (!doc) return notFound(res)
      return aOk(res, doc)
    }

    if (query.search) {
      docs = searchDocs(kb.docs, query.search)
    }
    const sortBy = buildSortBy(query)
    docs = sortDocs(kb.docs, sortBy, docs && docs.map(doc => doc.id))
    const { total, hasMore, results } = limitDocs(
      docs,
      query,
      defDocsLimit,
      maxDocsLimit
    )

    aOk(res, { total, results, hasMore })
  })

  // handle new doc
  app.post('/docs', async (req, res) => {
    const { name, dir, md } = req.body
    if (!isOkDoc({ name, dir, md }, kb, res, true)) return
    try {
      const docPath = path.join(docsDir, dir || '', name)
      await fs.outputFile(docPath, md)
      useGit && (await git.add(docPath))
      useGit && (await git.commit(`added doc ${docPath.split(docsDir)[1]}`))
    } catch (err) {
      return serverError(res, err)
    }
    const added = new Date()
    const doc = kb.setDoc(path.join(dir || '', name), added, md, added)
    aOk(res, doc)
  })

  // handle update
  app.patch('/docs', async (req, res) => {
    const { query, body } = req
    const doc = kb.docs[query.id]
    const { name, dir, md } = body
    if (!doc) return notFound(res)
    if (!isOkDoc({ name: name || doc.name, dir, md }, kb, res)) return
    let newDir = typeof dir === 'string' ? dir : doc.dir
    const oldDir = path.join(docsDir, doc.dir)
    const oldPath = path.join(oldDir, doc.name)
    const docPath = path.join(docsDir, newDir, name || doc.name)
    const oldRelPath = oldPath.split(docsDir + '/')[1]
    const curRelPath = docPath.split(docsDir + '/')[1]
    const isNewPath = oldPath !== docPath

    if (isNewPath && kb.docs[curRelPath]) {
      return userError(res, 'item already exists at new path')
    }
    try {
      if (md) {
        await fs.outputFile(docPath, md)
        isNewPath && (await fs.remove(oldPath))
      } else if (isNewPath) {
        await fs.move(oldPath, docPath)
      }
      await tryRmdir(docsDir, oldRelPath)

      if (useGit && isNewPath) {
        await git.rm(oldPath)
        await git.add(docPath)
        await git.commit(`renamed doc ${oldRelPath} to ${curRelPath}`)
      } else if (useGit) {
        await git.add(docPath)
        await git.commit(`updated doc ${curRelPath}`)
      }
    } catch (err) {
      return serverError(res, err)
    }
    const updated = new Date()
    const updatedDoc = kb.setDoc(curRelPath, doc.created, md || doc.md, updated)
    aOk(res, updatedDoc)
  })

  // handle delete doc
  app.delete('/docs', async (req, res) => {
    const { query } = req
    const doc = { ...kb.docs[query.id] }

    if (!doc) {
      return notFound(res)
    }
    const toRemove = path.join(docsDir, doc.id)

    try {
      await fs.remove(toRemove)
      // try removing directory to clean up if was only file in dir
      if (doc.dir) {
        tryRmdir(docsDir, doc.dir)
      }
      useGit && (await git.rm(doc.id))
      useGit && (await git.commit(`removed doc ${doc.id}`))
    } catch (err) {
      return serverError(res, err)
    }
    delete kb.docs[query.id]
    aOk(res)
  })
}
