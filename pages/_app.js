import Head from 'next/head'
import '../src/styles/global'
import store from '../src/redux/store'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import { setUser, doLogin } from '../src/redux/actions/userAct'

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
        <>
          <Head>
            <title>My Knowledge Base</title>
          </Head>

          <Container>
            <Component {...pageProps} />
          </Container>
        </>
      </Provider>
    )
  }
}
