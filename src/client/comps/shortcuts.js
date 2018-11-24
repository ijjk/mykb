import { useEffect } from 'react'
import Router from 'next/router'
import logout from '../util/logout'
import addBase from '../../util/addBase'

/* - keyboard shortcuts
  g then h -> navigate home
  g then n -> navigate to new doc
  g then s -> navigate to settings
  g then l -> logout
  e (when on doc page) -> edit doc
  / (when on home page) -> focus search
  ctrl/cmd + enter -> submit new doc (handled in CodeMirror component)
*/
const keyToUrl = {
  72: '/',
  78: '/new',
  83: '/settings',
}
const keyToEl = {
  69: { sel: '#edit', func: 'click' },
  191: { sel: '.search', func: 'focus' },
}
const getKey = e => e.which || e.keyCode

let prevKey

const handleKeyDown = e => {
  const tag = e.target.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA') return
  const key = getKey(e)
  if (prevKey === 71) {
    // prev key was g
    switch (key) {
      case 72:
      case 78:
      case 83: {
        const url = keyToUrl[key]
        Router.push(url, addBase(url))
        break
      }
      case 76: {
        // logout
        setTimeout(logout, 1)
        break
      }
      default:
        break
    }
  }
  switch (key) {
    case 69:
    case 191: {
      const { sel, func } = keyToEl[key]
      const el = document.querySelector(sel)
      if (el) setTimeout(() => el[func](), 1)
      break
    }
    default:
      break
  }
  prevKey = key
}

export default function Shortcuts(props) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return null
}
