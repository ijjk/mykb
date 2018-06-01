import { Component } from 'react'
import Router from 'next/router'
import getUrl from '../util/getUrl'
import { getKey } from '../util/keys'
import { doLogout } from '../redux/actions/userAct'

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

class KeyShortcuts extends Component {
  handleDown = e => {
    const tag = e.target.tagName
    if (tag === 'INPUT' || tag === 'TEXTAREA') return
    const key = getKey(e)
    if (this.prevKey === 71) {
      // prev key was g
      switch (key) {
        case 72:
        case 78:
        case 83: {
          const url = keyToUrl[key]
          Router.push(url, getUrl(url))
          break
        }
        case 76: {
          setTimeout(doLogout, 1)
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
    this.prevKey = key
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleDown)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleDown)
  }
  render = () => null
}

export default KeyShortcuts
