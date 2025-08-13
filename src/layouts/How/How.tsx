'use client'

import * as React from 'react'
import { Element } from 'react-scroll'

import { useRevealConfig } from '@/hooks'
import { RevealWrapper } from 'next-reveal'

import { Container, Heading, Text } from '@/components'

import styles from './styles.module.scss'

import Card1 from '@public/section-how/card1.webp'
import Card1Hover from '@public/section-how/card1-hover.webp'
import Card2 from '@public/section-how/card2.webp'
import Card2Hover from '@public/section-how/card2-hover.webp'
import Card3 from '@public/section-how/card3.webp'
import Card3Hover from '@public/section-how/card3-hover.webp'
import Image from 'next/image'

const content = [
  {
    title: (
      <>
        <b>Deposit</b> Funds
      </>
    ),
    text: 'Deposit into an Aqua vault to start earning yield instantly.',
    image: Card1,
    hoverImage: Card1Hover,
  },
  {
    title: (
      <>
        <b>Smart</b> Allocation
      </>
    ),
    text: 'Aqua strategies route your capital through the best yield paths',
    image: Card2,
    hoverImage: Card2Hover,
  },
  {
    title: (
      <>
        <b>Flexible</b> Access
      </>
    ),
    text: 'Withdraw anytime with no lockups or restrictions on your capital.',
    image: Card3,
    hoverImage: Card3Hover,
  },
]
export const How: React.FC = () => {
  const reveal = useRevealConfig()

  if (!reveal) {
    return null
  }

  return (
    <Element name="how">
      <section className={styles.base}>
        <Container className={styles.container}>
          <RevealWrapper {...reveal.revealConfig}>
            <Heading element="h2" className={styles.title}>
              How <b>Aqua</b> Powers Liquidity
            </Heading>
          </RevealWrapper>
          <RevealWrapper {...reveal.revealConfig}>
            <Text variant={400} className={styles.text}>
              Aqua connects your deposits with the most active markets and
              protocols on MegaETH. Your assets stay productive, supporting
              volume and liquidity in real time.
            </Text>
          </RevealWrapper>
          <div className={styles.grid}>
            {content.map((item, index) => (
              <RevealWrapper
                {...reveal.revealConfigWithInterval}
                delay={100 * index}
                className={styles.item}
                key={index}
              >
                <div className={styles.images}>
                  <Image
                    src={item.image}
                    placeholder="blur"
                    quality={100}
                    alt="image"
                    fill
                  />
                  <Image
                    src={item.hoverImage}
                    placeholder="blur"
                    alt="hover-image"
                    quality={100}
                    fill
                  />
                </div>
                <Heading element="h4" className={styles.subtitle}>
                  {item.title}
                </Heading>
                <Text variant={400} className={styles.subtext}>
                  {item.text}
                </Text>
              </RevealWrapper>
            ))}
          </div>
        </Container>
      </section>
    </Element>
  )
}
