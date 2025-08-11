'use client'

import * as React from 'react'
import { Element } from 'react-scroll'

import { Button, Container, Glyph, Heading, Icon, Text } from '@/components'

import styles from './styles.module.scss'

const links = [
  {
    icon: 'ETH',
    text: 'ETH vault: 5.3% APY',
    link: '#',
  },
  {
    icon: 'USDC',
    text: 'USDC vault: 7.0% APY',
    link: '#',
  },
  {
    icon: 'USDT',
    text: 'USDT vault: 9.2% APY',
    link: '#',
  },
]

export const Powered: React.FC = () => {
  return (
    <Element name="vaults">
      <section className={styles.base}>
        <Container className={styles.container}>
          <Heading element="h2" className={styles.title}>
            Powered by real-time liquidity <br />
            <b>Built for speed and efficiency.</b>
          </Heading>
          <Text variant={400} className={styles.text}>
            Aqua vaults are designed to grow your capital while fueling
            liquidity across MegaETH. Strategies adapt in real-time to market
            conditions, volume flows, and yield opportunities.
          </Text>
          <div className={styles.list}>
            {links.map((item, index) => (
              <a href={item.link} key={index} className={styles.item}>
                <span className={styles.icon}>
                  <Icon glyph={item.icon as Glyph} />
                </span>
                {item.text}
                <Icon glyph={'ArrowUp'} className={styles.arrow} />
              </a>
            ))}
          </div>
          <Button size={66} variant="blue">
            Explore all vaults
          </Button>
        </Container>
      </section>
    </Element>
  )
}
