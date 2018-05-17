import Document, { Head, Main, NextScript } from 'next/document'; 
import getUrl from '../util/getUrl'; 

export default class MyDocument extends Document {
  render() {
    const favicon = getUrl('favicon.ico'); 
    return (
      <html>
        <Head>
          <meta charSet='utf-8'/>
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'/>
          <link rel='shortcut icon' href={favicon} type='image/x-icon'/>
          <link rel='icon' href={favicon} type='image/x-icon'/>
          <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic'/>
          <link rel='stylesheet' href={getUrl('/_next/static/style.css')} />
          <title>My Knowledge Base</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}