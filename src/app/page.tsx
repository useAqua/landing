import { Fragment } from 'react'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import { How, Intro, Powered, Why, FAQ } from '@/layouts'

const FlowComponentWithNoSSR = dynamic(() => import('../layouts/Flow/Flow'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Aqua',
  description: "MegaETH's liquidity and yield coordination layer.",
}

export default function Page() {
  return (
    <Fragment>
      <Intro />
      <How />
      <Powered />
      <Why />
      <FlowComponentWithNoSSR />
      <FAQ />
    </Fragment>
  )
}
