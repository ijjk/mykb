import App, { Container } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import withRedux from '../src/client/hocs/withRedux'
import Header from '../src/client/layout/header'
import Footer from '../src/client/layout/footer'
import Shortcuts from '../src/client/comps/shortcuts'
import Milligram from '../src/client/styles/milligram'
import Roboto from '../src/client/styles/roboto'
import Global from '../src/client/styles/global'
import '../src/client/util/registerServiceWorker'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { Component, pageProps }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <>
          <Head>
            <title>My Knowledge Base</title>
          </Head>

          <Header />

          <div className="fill main">
            <Container>
              <Component {...pageProps} />
            </Container>
          </div>

          <Footer />
          <Shortcuts />

          {/* style components */}
          <Roboto />
          <Milligram />
          <Global />
        </>
      </Provider>
    )
  }
}

export default withRedux(MyApp)
