'use client'

import * as React from 'react'
import { RevealWrapper } from 'next-reveal'
import { useRevealConfig } from '@/hooks'

import { Button, Container, Heading, Text } from '@/components'
import { LAUNCH_APP_LINK } from '@/common'

import styles from './styles.module.scss'

export const Intro: React.FC = () => {
  const reveal = useRevealConfig()

  if (!reveal) {
    return null
  }

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
        <RevealWrapper {...reveal?.revealConfigWithInterval} delay={100}>
          <Heading element="h1" className={styles.title}>
            <b>Aqua.</b> MegaETHʼs Liquidity Engine
          </Heading>
        </RevealWrapper>
        <RevealWrapper {...reveal?.revealConfigWithInterval} delay={200}>
          <Text variant={400} className={styles.text}>
            Put your assets to work in deep, dynamic vaults. Aqua helps you earn
            real yield while powering onchain liquidity across MegaETH.
          </Text>
        </RevealWrapper>
        <RevealWrapper {...reveal?.revealConfigWithInterval} delay={300}>
          <Button as="a" size={66} variant="blue" href={LAUNCH_APP_LINK}>
            Join Waitlist {/* Launch App */}
          </Button>
        </RevealWrapper>
      </Container>
    </section>
  )
}
