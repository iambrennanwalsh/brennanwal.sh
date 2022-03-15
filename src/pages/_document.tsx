import { getCssText } from '@/styles'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&family=Inconsolata&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/images/interface/favicon.png" />
          <style dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
