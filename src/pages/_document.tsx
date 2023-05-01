import { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {CssBaseline.flush()}
        <>
          <title>write thoughts</title>
          <meta name="description" content="Build by kaisershad" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
