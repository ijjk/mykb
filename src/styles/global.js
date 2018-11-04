import { css, rehydrate, media, keyframes } from 'glamor'
import theme from './theme'

// rehydrate must be called before any glamor calls
// or else styles will duplicate
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

// must be required after rehydrate or it will duplicate
require('./milligram')
require('./Roboto')

css.global('body, code, pre', {
  background: theme.primary,
  color: theme.text,
  margin: 0,
})

css.global('pre, code', {
  fontSize: '1.5rem',
})

css.global('input, textarea, select, button, .button, .cm-s-monokai.CodeMirror', {
  color: theme.text,
  borderRadius: '.4rem',
  border: 'none !important',
  backgroundColor: `${theme.primaryAlt} !important`,
})

css.global('button[disabled], button.disabled', {
  cursor: 'default',
})

css.global('input, textarea', {
  fontSize: '1.6rem',
  fontFamily: theme.fontFamily,
  fontWeight: 300,
  resize: 'none',
})

css.global('input[disabled], textarea[disabled]', {
  opacity: 0.8,
  cursor: 'not-allowed',
})

css.global('input::placeholder, textarea::placeholder', {
  opacity: 0.85,
  color: theme.text,
})

css.global('select', {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  textOverflow: '',
  background: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="%23d1d1d1" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>') center right no-repeat`,
})

css.global('select:focus', {
  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="%239b4dca" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>')`,
})

css.global('a', {
  color: theme.link,
  cursor: 'pointer',
})

css.global('a:visited, a:focus', {
  color: theme.link,
})

css.global('a:hover', {
  color: theme.linkAct,
})

css.global('.danger', {
  color: theme.danger,
})

css.global('.noMargin', {
  margin: '0 !important',
})

css.global('.float-right', {
  marginLeft: 'auto',
})

css.global('.float-left', {
  marginRight: 'auto',
})

css.global('.container', {
  display: 'flex',
  flexDirection: 'column',
})

css.global('.CodeMirror', {
  width: '100%',
})

css.global('.cm-s-monokai span.cm-comment', {
  color: '#ccc9ba',
})

css.global('.content', {
  minHeight: 'calc(100vh - 55px - 50px)',
  padding: 10,
})

css.global('.content p, .content pre', {
  wordWrap: 'break-word',
})

css.global('.v-center', {
  minHeight: 'calc(100vh - 55px - 50px - 20px)',
  flexDirection: 'row',
  alignItems: 'center',
})

css.global('.nomob', {
  display: 'none !important',
})

css.global('.inline', {
  display: 'inline-flex !important',
  alignItems: 'center',
})

css.global('.inline select, .inline input', {
  width: 'auto',
  height: 28,
  flexGrow: 1,
  marginLeft: 5,
  marginBottom: 0,
  padding: 6,
  border: 'none',
})

css.global('.Markdown pre', {
  marginBottom: '2.5rem',
})

const spinKeys = keyframes('spinner', {
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
})

css.global('.spinner', {
  height: 24,
  width: 24,
  borderRadius: '100%',
  border: `2px solid ${theme.text}`,
  borderRight: 'none',
  borderBottom: 'none',
  animation: `${spinKeys} 500ms linear infinite`,
})

css.global('.paginate', {
  listStyle: 'none', 
  textAlign: 'center', 
  userSelect: 'none', 
  margin: 0,
})

css.global('.paginate li', {
  display: 'inline-block',
})
    
css.global('.paginate li.active a', {
  borderColor: theme.link,
})

css.global('.paginate a', {
  outline: 0,
  borderRadius: '50%', 
  border: '1px solid',
  borderColor: 'transparent',
  padding: '3px 8px',
})

css.insert(`
  @media screen and (max-width: 639px) {
    .row .column.column-50 {
      max-width: 100%;
    }
  }

  @media screen and (min-width: 640px) {
    .nomob {
      display: block !important; 
    }
  }
`)

media('screen and (max-width: 639px)', {
  '.row .column.column-50': {
    maxWidth: '100%'
  }
})

media('screen and (min-width: 640px)', {
  '.nomob': {
    display: 'block !important',
  }
})
