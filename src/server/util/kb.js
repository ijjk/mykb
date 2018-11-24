const path = require('path')
const fs = require('fs-extra')
const chokidar = require('chokidar')

/**
 * loads markdown files from docs directory
 * and watches for changes
 * @param { Object } options - the options object
 */
module.exports = function KB({
  kbPath = '',
  cacheSize = 10 << 20, // 10 MB
  maxDocSize = 100 << 10, // 100 KB
}) {
  this.docs = {}
  this.cachedSize = 0

  /**
   * update doc entry (does not update doc file)
   * @param { String } relPath - relative path of doc to docsDir
   * @param { Date } created - date string of when doc was created
   * @param { String } md - the markdown string
   * @param { Date } updated - date string of when doc was last updated
   * @returns { Object } - the new doc entry
   */
  this.setDoc = (relPath, created, md, updated) => {
    const id = relPath
    let dir = relPath.split('/')
    const name = dir.pop()
    dir = dir.join('/')
    const doc = {
      name,
      dir,
      id,
      md,
      created,
      updated,
    }
    this.docs[id] = doc
    return doc
  }

  /**
   * @param { String } path - the absolute path to doc
   * @returns { String } - relative path from docs directory
   */
  this.getRelPath = path => {
    path = path.split(kbPath).pop()
    if (path.substr(0, 1) === '/') path = path.substr(1)
    return path
  }

  /**
   * handle doc add or change
   * @param { String } path - absolute path to doc
   * @param { Object|undefined } stats - the fs.stats object for the doc
   */
  this.handleDoc = async (path, stats) => {
    const relPath = this.getRelPath(path)

    if (!stats) stats = await fs.stat(path)
    else {
      // stats were set so it's a change event
      const changedDoc = this.docs[relPath]
      if (changedDoc && changedDoc.md) this.cached -= changedDoc.md.length
    }
    const { birthtime, size, mtime } = stats
    let md = null
    if (size < maxDocSize && this.cachedSize + size < cacheSize) {
      md = await fs.readFile(path)
      md = md.toString()
      this.cached += md.length
    }
    this.setDoc(relPath, birthtime, md, mtime)
  }

  // set up watching of docs dir and populate initial data
  this.watcher = chokidar.watch(path.join(kbPath, '/**/*.md'))

  this.loaded = new Promise(resolve => {
    this.watcher.on('ready', resolve)
  })

  this.watcher.on('add', this.handleDoc)
  this.watcher.on('change', this.handleDoc)
  this.watcher.on('unlink', path => {
    // doc removed
    const id = this.getRelPath(path)
    if (this.docs[id] && this.docs[id].md) {
      this.cached -= this.docs[id].md.length
    }
    delete this.docs[id]
  })
}
