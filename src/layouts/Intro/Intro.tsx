import * as React from 'react'

import { Button, Container, Heading, Text } from '@/components'

import styles from './styles.module.scss'

export const Intro: React.FC = () => {
  return (
    <section className={styles.base}>
      <Container className={styles.container}>
        <div className={styles.video}>
          <video
            src="/video.mp4"
            autoPlay
            muted
            playsInline
            loop
            className={styles.videoDesktop}
          />
          <video
            src="video-mobile.mp4"
            autoPlay
            muted
            playsInline
            loop
            className={styles.videoMobile}
          />
        </div>
        <Heading element="h1" className={styles.title}>
          <b>Aqua.</b> MegaETHʼs Liquidity Engine
        </Heading>
        <Text variant={400} className={styles.text}>
          Put your assets to work in deep, dynamic vaults. Aqua helps you earn
          real yield while powering onchain liquidity across MegaETH.
        </Text>
        <Button size={66} variant="blue">
          Launch App
        </Button>
      </Container>
    </section>
  )
}
