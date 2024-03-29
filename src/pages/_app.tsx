import type { AppProps } from 'next/app'
import { SpeedInsights } from '@vercel/speed-insights/next'

import Head from 'next/head'
import GlobalStyle from '@styles/index'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>Marcos Moura.</title>
      <meta name="viewport"content="width=device-width, initial-scale=1"/>
    </Head>
    <GlobalStyle/>

    <Component {...pageProps} />
    <SpeedInsights />
  </>
  )
}
