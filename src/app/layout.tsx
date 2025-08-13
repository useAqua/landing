'use client'

import 'normalize.css'
import '@/styles/globals.scss'

import { fonts } from '@/fonts'
import { BaseLayout } from '@/components'
import { useRevealConfig } from '@/hooks'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const reveal = useRevealConfig()

  return (
    <html lang="en">
      <body
        className={Object.values(fonts)
          .map((font) => `${font.variable}`)
          .join(' ')}
      >
        {reveal && <BaseLayout>{children}</BaseLayout>}
      </body>
    </html>
  )
}
