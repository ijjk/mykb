import React, { Component } from 'react'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'
import { doLogout } from '../redux/actions/userAct'
import Link from 'next/link'
import getUrl from '../util/getUrl'
import mapUser from '../util/mapUser'

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
      <nav className="navbar" role="navigation" aria-label="main navigation">
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
