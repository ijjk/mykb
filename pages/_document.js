import getUrl from '../src/util/getUrl'
import { renderStaticOptimized } from 'glamor/server'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = renderStaticOptimized(() => page.html || page.errorHtml)
    return { ...page, ...styles }
  }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={getUrl('/apple-touch-icon.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={getUrl('/favicon-32x32.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={getUrl('/favicon-16x16.png')}
          />
          <link rel="manifest" href={getUrl('/site.webmanifest')} />
          <link
            rel="mask-icon"
            href={getUrl('/safari-pinned-tab.svg')}
            color="#00d1b2"
          />
          <meta name="msapplication-TileColor" content="#202225" />
          <meta name="theme-color" content="#202225" />
          <style
            dangerouslySetInnerHTML={{ __html: this.props.css }}
            data-glamor
          />
          <script
            dangerouslySetInnerHTML={{
              __html: 'window.kbConf=' + JSON.stringify(app.get('kbConf')),
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
