'use client'

import * as React from 'react'
import { Element } from 'react-scroll'

import { Container, Heading, Text } from '@/components'

import styles from './styles.module.scss'

import Card1 from '@public/section-why/card1.webp'
import Card2 from '@public/section-why/card2.webp'
import Card3 from '@public/section-why/card3.webp'
import Image from 'next/image'
import { useRevealConfig } from '@/hooks'
import { RevealList, RevealWrapper } from 'next-reveal'

const content = [
  {
    title: (
      <>
        <b>Optimized</b> yield
      </>
    ),
    text: (
      <>
        Earn yield and get exposure to top protocols and market <br /> activity
        across the ecosystem.
      </>
    ),
    image: Card1,
  },
  {
    title: (
      <>
        <b>Real-time</b> liquidity
      </>
    ),
    text: (
      <>
        Your assets actively support trading, lending, and liquidity <br />
        provisioning throughout the ecosystem.
      </>
    ),
    image: Card2,
  },
  {
    title: (
      <>
        <b>Simple</b> and <b>transparent</b>
      </>
    ),
    text: <>Deposit or withdraw anytime. No lockups, no hidden mechanics.</>,
    image: Card3,
  },
]

export const Why: React.FC = () => {
  const reveal = useRevealConfig()

  if (!reveal) {
    return null
  }

  return (
    <Element name="why">
      <section className={styles.base}>
        <Container>
          <RevealWrapper {...reveal.revealConfig}>
            <Heading element="h2" className={styles.title}>
              Why Choose <b>Aqua</b>
            </Heading>
          </RevealWrapper>
          <RevealList
            {...reveal.revealConfig}
            interval={100}
            className={styles.list}
          >
            {content.map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.count}>( {index + 1} )</div>
                <Heading element="h3" className={styles.subtitle}>
                  {item.title}
                </Heading>
                <Text variant={400} className={styles.text}>
                  {item.text}
                </Text>
                <div className={styles.image}>
                  <Image
                    src={item.image}
                    placeholder="blur"
                    quality={100}
                    alt="image"
                    fill
                  />
                </div>
              </div>
            ))}
          </RevealList>
        </Container>
      </section>
    </Element>
  )
}
