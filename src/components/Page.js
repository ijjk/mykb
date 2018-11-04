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
      {(() => {
        if (user.email) {
          return <div className="container content">{children}</div>
        }
        return user.setup ? <Setup /> : <Login {...{ user }} />
      })()}
      <Footer />
    </div>
  )
}
export default connect(mapUser)(Page)
