import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import theme from '../theme'
import logout from '../util/logout'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import addBase from '../../util/addBase'

const navLinks = [
  { link: '/', label: 'Home' },
  { link: '/new', label: 'New' },
  { link: '/settings', label: 'Settings' },
]

function Header({ user, router }) {
  const curPath = addBase(router.pathname)
  const [menuOpen, setOpen] = useState(false)
  const handleChange = () => setOpen(false)

  useEffect(() => {
    router.events.on('routeChangeComplete', handleChange)
    return () => router.events.off('routeChangeComplete', handleChange)
  }, [])

  return (
    <header>
      <h3>
        <Link href="/" as={addBase('/')}>
          <a>MYKB</a>
        </Link>
      </h3>

      {user.id && (
        <>
          <label htmlFor="menu">MENU</label>
          <input
            id="menu"
            type="checkbox"
            checked={menuOpen}
            onChange={e => setOpen(e.target.checked)}
          />
        </>
      )}

      <nav>
        {user.id && (
          <ul>
            {navLinks.map(({ link, label }) => (
              <li key={label}>
                <Link href={link} as={addBase(link)}>
                  <a className={addBase(link) === curPath ? 'active' : null}>
                    {label}
                  </a>
                </Link>
              </li>
            ))}
            <li>
              <a href={addBase('/logout')} onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        )}
      </nav>

      <style jsx>{`
        header {
          height: 55px;
          display: flex;
          padding: 0 10px;
          flex-direction: row;
          align-items: center;
          background: ${theme.primaryAlt};
        }

        h3 {
          margin: 0;
          line-height: 1;
        }

        label {
          cursor: pointer;
          margin-left: auto;
          user-select: none;
          color: ${theme.link};
        }
        input[type='checkbox'] {
          display: none;
        }

        nav {
          left: 0;
          top: 55px;
          height: 0;
          width: 100%;
          z-index: 10;
          position: fixed;
          overflow: hidden;
          background: ${theme.primaryAlt};
          transition: height 200ms ease-in-out;
        }

        input:checked ~ nav {
          height: 180px;
        }

        ul {
          margin: 0;
          list-style: none;
        }

        li {
          margin: 0;
        }

        li a {
          width: 100vw;
          display: flex;
          padding: 10px;
          align-items: center;
          justify-content: center;
          transition: all ease 200ms;
        }

        li a.active,
        li a:hover {
          opacity: 1;
          background: ${theme.primary};
        }

        @media (min-width: 420px) {
          label {
            display: none;
          }

          nav,
          ul {
            top: 0;
            left: none;
            height: 55px;
            width: auto;
            flex-grow: 1;
            position: relative;
            display: inline-flex;
            flex-direction: row;
            justify-content: flex-end;
          }

          li {
            margin: 0;
          }

          li a {
            height: 55px;
            width: initial;
            padding: 0 15px;
          }
        }
      `}</style>
    </header>
  )
}

export default withRouter(connect(({ user }) => ({ user }))(Header))
