import { Fragment } from 'react'
import type { Metadata } from 'next'

import { How, Intro, Powered, Why, Flow, FAQ } from '@/layouts'

export const metadata: Metadata = {
  title: 'Aqua landing',
  description: 'Page description',
}

export default function Page() {
  return (
    <Fragment>
      <Intro />
      <How />
      <Powered />
      <Why />
      <Flow />
      <FAQ />
    </Fragment>
  )
}
