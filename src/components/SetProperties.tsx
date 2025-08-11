'use client'

import * as React from 'react'
import { useWindowSize } from 'usehooks-ts'

export const SetProperties: React.FC = () => {
  const { width, height } = useWindowSize()
  const [sizes, setSizes] = React.useState({ width: 0, height: 0 })

  React.useEffect(() => {
    setSizes({ width: document.body.offsetWidth, height })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height])

  React.useEffect(() => {
    document.body.style.setProperty('--vw', `${sizes.width / 100}px`)
    document.body.style.setProperty('--vh', `${sizes.height / 100}px`)
  }, [sizes])

  return null
}
