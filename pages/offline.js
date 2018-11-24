import { useEffect } from 'react'
import Router from 'next/router'

import addBase from '../src/util/addBase'

export default function Offline() {
  // force next to render correct route on mount
  useEffect(() => {
    const { pathname, search } = window.location
    let origRoute = pathname + search
    let curRoute = origRoute.split(addBase('/'))
    curRoute.splice(0, 1)
    curRoute = '/' + curRoute.join(addBase('/'))

    if (curRoute === '/offline' && navigator.onLine) {
      curRoute = '/'
      origRoute = '/'
    }
    Router.push(curRoute, origRoute)
  }, [])

  return null
}
