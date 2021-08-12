import type { ReactNode } from 'react'
import type { NextPage } from 'next'

export type GetLayoutMethod = (page: ReactNode) => ReactNode
export type NextPageWithLayout = NextPage & {
  getLayout: GetLayoutMethod
}
