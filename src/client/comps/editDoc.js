import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import { updateDoc } from '../util/docHelpers'
import isOkDirPart from '../../util/isOkDirPart'

const Markdown = dynamic(() => import('react-markdown'))
const CodeMirror = dynamic(() => import('./codemirror'))
const dirError =
  'contains an invalid character, must only have a-z, 0-9, -, _, and not start or end with a period or space'

function EditDoc({ cache, query }) {
  const doc = cache[query.id] || {}
  const [md, setMd] = useState(
    doc.md || '### New document\n\nHeres some starting text'
  )
  const [dir, setDir] = useState(doc.dir || '')
  const [name, setName] = useState(doc.name || '')
  const [error, setError] = useState(null)
  const [pending, setPending] = useState(false)

  const handleSubmit = () => {
    if (pending) return
    let err
    if (!name.trim()) {
      err = 'Name is required'
    } else if (!isOkDirPart(name)) {
      err = `Name ${dirError}`
    } else if (dir && dir.split('/').some(dirPart => !isOkDirPart(dirPart))) {
      err = `Directory ${dirError}`
    } else if (!md.trim()) {
      err = 'Contents of markdown can not be empty'
    }

    if (err) return setError(err)
    setError(null)
    setPending(true)
    updateDoc(query.id, md, name.trim(), dir).catch(err => {
      setError(err.message)
      setPending(false)
    })
  }

  return (
    <div className="container padded editDoc">
      <div className="row">
        <div className="column column-50">
          <Markdown source={md} className="Markdown" />
        </div>
        <div className="column column-50">
          <div className="row">
            <div className="column column-60">
              <input
                type="text"
                value={name}
                maxLength={255}
                placeholder="Document name"
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="column column">
              <input
                type="text"
                value={dir}
                placeholder="Directory (optional)"
                onChange={e => setDir(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <CodeMirror
              value={md}
              onChange={setMd}
              onSubmit={handleSubmit}
              style={{ width: '100%' }}
              className="column wrapCodeMirror"
              options={{
                theme: 'monokai',
                mode: 'markdown',
                lineWrapping: true,
              }}
            />
          </div>
          <div className="row" style={{ paddingTop: 15 }}>
            <div className="column">
              {error && <p className="float-left">{error}</p>}
              <button className="float-right" onClick={handleSubmit}>
                {pending ? 'Pending' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .wrapCodeMirror textarea {
          margin-bottom: 0;
          min-height: 300px;
        }
      `}</style>
    </div>
  )
}

export default connect(({ cache }) => ({ cache }))(EditDoc)
