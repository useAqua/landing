import localFont from 'next/font/local'
import { Inter, Bricolage_Grotesque } from 'next/font/google'

const redactionFont = localFont({
  src: [
    {
      path: './RedactionItalic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-redaction',
  display: 'swap',
  fallback: ['sans-serif'],
})

const interFont = Inter({
  weight: ['600', '500', '400'],
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
})

const bricolageFont = Bricolage_Grotesque({
  weight: ['500', '400'],
  variable: '--font-bricolage',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
})

export const fonts = {
  redactionFont,
  interFont,
  bricolageFont,
}
