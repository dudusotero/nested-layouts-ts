import type { ReactNode } from 'react'
import type { AppProps } from 'next/app'
import type { NextPageWithLayout } from '../types'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as NextPageWithLayout).getLayout || ((page: ReactNode) => page)

  return getLayout(<Component {...pageProps}></Component>)
}

export default MyApp
