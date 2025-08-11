import * as React from 'react'
import { Footer, Header } from '@/components'
import styles from './BaseLayout.module.scss'
import { SetProperties } from '../SetProperties'

type BaseLayoutProps = React.PropsWithChildren

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className={styles.base}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      <SetProperties />
    </div>
  )
}

export { BaseLayout }
