import React, { useEffect } from 'react'
import config from '../../util/pubConfig'
import MonokaiStyles from '../styles/codemirror/monokai'
import CodeMirrorStyles from '../styles/codemirror/codemirror'

let cm
let editor
let textareaRef

if (!config.ssr) {
  require('codemirror/mode/markdown/markdown')
  cm = require('codemirror')
}

export default function CodeMirror({
  value,
  style,
  className,
  options = {},
  onChange = () => {},
  onSubmit = () => {},
}) {
  const handleChange = (cm, e) => onChange(cm.getValue())
  const handleSubmit = (cm, e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      onSubmit()
    }
  }

  useEffect(() => {
    if (cm) {
      if (!editor || editor.getTextArea() !== textareaRef) {
        editor = cm.fromTextArea(textareaRef, options)
      }
      editor.on('change', handleChange)
      editor.on('keydown', handleSubmit)
    }
    return () => {
      if (editor) {
        editor.off('change', handleChange)
        editor.off('keydown', handleSubmit)
      }
    }
  })

  return (
    <div {...{ className, style }}>
      <textarea
        {...{
          defaultValue: value,
          ref: el => (textareaRef = el),
        }}
      />

      <MonokaiStyles />
      <CodeMirrorStyles />
    </div>
  )
}
