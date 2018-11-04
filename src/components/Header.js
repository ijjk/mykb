import React, { Component } from 'react'
import { css } from 'glamor'
import theme from '../styles/theme'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'
import { doLogout } from '../redux/actions/userAct'
import Link from 'next/link'
import getUrl from '../util/getUrl'
import mapUser from '../util/mapUser'

const style = {
  background: theme.primaryAlt,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 55,

  '& .navbar-brand': {
    marginLeft: '0.75em',
    marginRight: 'auto',

    '& h3': {
      marginBottom: 0,
    },
  },

  '& .navbar-burger': {
    width: 32,
    display: 'none',
    marginRight: 10,

    '&.active div': {
      '&:nth-child(1)': {
        transformOrigin: 'center',
        transform: 'translateY(8px) rotate(45deg)',
      },
      '&:nth-child(2)': {
        opacity: 0,
      },
      '&:nth-child(3)': {
        transformOrigin: 'left -6px',
        transform: 'translateY(8px) rotate(-45deg)',
      },
    },
    '& div': {
      transition: 'all ease-in-out 150ms',
      width: '100%',
      height: 2,
      margin: '5px 0',
      borderRadius: 1,
      background: theme.text,
    },
  },

  '& .navbar-items': {
    display: 'inline-flex',
    flexDirection: 'row',

    '& .active .item, .item:hover': {
      background: theme.primary,
    },
    '& .item': {
      margin: 0,
      cursor: 'pointer',
      padding: '15px 20px',
    },
  },

  '@media screen and (max-width: 840px)': {
    '& .navbar-burger': {
      display: 'inline-block',
    },

    '& .navbar-items': {
      display: 'block',
      overflow: 'hidden',
      position: 'fixed',
      top: 55,
      left: 0,
      zIndex: 5,
      background: theme.primaryAlt,
      width: '100%',
      transform: 'scaleY(0)',
      transformOrigin: 'top',
      transition: 'all ease-in-out 125ms',

      '&.active': {
        transform: 'scaleY(1)',
        overflow: 'auto',
      },
      '& .item': {
        width: '100%',
        padding: '5px 0',
        textAlign: 'center',
      },
    },
  },
}

const NavLink = ({ children, href, active }) => {
  const activeClass = active ? ' active' : ''
  return (
    <Link href={href} as={getUrl(href)}>
      <a className={activeClass}>{children}</a>
    </Link>
  )
}
const navItems = [['/', 'Home'], ['/new', 'New Doc'], ['/settings', 'Settings']]

class Header extends Component {
  state = {
    open: false,
  }
  hideNav = () => this.setState({ open: false })
  toggleNav = () =>
    this.setState({
      open: !this.state.open,
    })
  isActive = url => getUrl(this.props.router.pathname) === getUrl(url)
  logout = e => {
    e.preventDefault()
    this.hideNav()
    doLogout()
  }

  render() {
    const expandClass = this.state.open ? ' active' : ''
    const { user } = this.props
    return (
      <nav
        className={'navbar ' + css(style)}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink href="/">
            <h3 onClick={this.hideNav}>MYKB</h3>
          </NavLink>
        </div>

        {!user.email
          ? null
          : [
              <div
                className={'navbar-burger ' + expandClass}
                onClick={this.toggleNav}
                key="burger"
              >
                <div />
                <div />
                <div />
              </div>,
              <div className={'navbar-items' + expandClass} key="items">
                {navItems.map(item => (
                  <NavLink
                    key={item[0]}
                    href={item[0]}
                    active={this.isActive(item[0])}
                  >
                    <p className="item" onClick={this.hideNav}>
                      {item[1]}
                    </p>
                  </NavLink>
                ))}
                <a href="/logout" onClick={this.logout}>
                  <p className="item">Logout</p>
                </a>
              </div>,
            ]}
      </nav>
    )
  }
}
export default withRouter(connect(mapUser)(Header))
