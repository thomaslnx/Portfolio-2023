import Document, { 
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from 'next/document'

import { ReactElement } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    }
    finally {
      sheet.seal()
    }
  }

  render(): ReactElement {
    return (
      <Html lang="en" className="no-js ss-preload">
        <Head>
          <meta name="description" content="Personal website"/>
          <meta charSet="utf-8"/>
          <meta name="author" content="Marcos de Moura Silva" />

          <meta property="og:description" content="Marcos Moura personal website"/>
          <meta property="og:image" content="../../public/images/Marcos.png"/>

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Public+Sans:wght@100;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body id="top">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
