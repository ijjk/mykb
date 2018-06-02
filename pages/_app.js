import App, { Container } from 'next/app'
import store from '../redux/store'
import { Provider } from 'react-redux'
import { setUser, doLogin } from '../redux/actions/userAct'
// Don't load sass during ssr
if (!global.kbConf) {
  require('../styles/style.sass')
}
const ssr = typeof window === 'undefined'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let user = {}
    let setup = false
    if (ssr) {
      user = ctx.req.user || {}
      setup = ctx.req.doSetup || false
    }
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { Component, pageProps, user, setup }
  }

  componentWillMount() {
    const { user, setup } = this.props
    setUser({ ...user, setup })
    if (!ssr && !user.email) {
      const { jwt } = window.localStorage
      if (jwt) doLogin(null, jwt, true)
    }
  }

  render() {
    let { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    )
  }
}
