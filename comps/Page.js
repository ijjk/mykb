import { connect } from 'react-redux'
import Header from './Header'
import KeyShortcuts from './KeyShortcuts'
import Footer from './Footer'
import Login from './Login'
import Setup from './Setup'
import mapUser from '../util/mapUser'

const Page = ({ user, children }) => {
  return (
    <div>
      <Header />
      <KeyShortcuts />
      {user.email ? (
        <div className="container content">{children}</div>
      ) : user.setup ? (
        <Setup />
      ) : (
        <Login {...{ user }} />
      )}
      <Footer />
    </div>
  )
}
export default connect(mapUser)(Page)
