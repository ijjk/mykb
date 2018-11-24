import Document, { Head, Main, NextScript } from 'next/document'
import addBase from '../src/util/addBase'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={addBase('/apple-touch-icon.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={addBase('/favicon-32x32.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={addBase('/favicon-16x16.png')}
          />
          <link rel="manifest" href={addBase('/site.webmanifest')} />
          <link
            rel="mask-icon"
            href={addBase('/safari-pinned-tab.svg')}
            color="#00d1b2"
          />
          <meta name="msapplication-TileColor" content="#202225" />
          <meta name="theme-color" content="#202225" />
          <script
            dangerouslySetInnerHTML={{
              __html:
                'window.publicConfig=' +
                JSON.stringify({
                  ...global.publicConfig,
                  ssr: false,
                }),
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
