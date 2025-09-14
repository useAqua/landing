'use client'

import * as React from 'react'
import { Element } from 'react-scroll'

import { Container, Heading, Text } from '@/components'

import * as Accordion from '@radix-ui/react-accordion'

import styles from './styles.module.scss'

const content = [
  {
    question: (
      <>
        What is <b>Aqua?</b>
      </>
    ),
    answer: (
      <>
        Aqua is a DeFi protocol on MegaETH that helps users earn yield on their
        assets while supporting ecosystem liquidity.
      </>
    ),
  },
  {
    question: (
      <>
        <b>Is Aqua</b> non-custodial?
      </>
    ),
    answer: (
      <>
        Yes. Your assets stay in on-chain smart contracts and can be withdrawn
        anytime.
      </>
    ),
  },
  {
    question: (
      <>
        What <b>assets</b> can I deposit?
      </>
    ),
    answer: <>ETH, USDC, LPs and more soon.</>,
  },
  {
    question: (
      <>
        Where does <b>the yield</b> come from?
      </>
    ),
    answer: (
      <>
        Aqua vaults use automated strategies to earn real yield from lending,
        trading fees and incentives from multiple protocols.
      </>
    ),
  },
  {
    question: (
      <>
        Is there an <b>Aqua token?</b>
      </>
    ),
    answer: (
      <>
        No native token yet. Future developments will be communicated through
        official channels.
      </>
    ),
  },
]

export const FAQ: React.FC = () => {
  return (
    <Element name="faq">
      <section className={styles.base}>
        <Container className={styles.container}>
          <Heading element="h2" className={styles.title}>
            FAQ
          </Heading>
          <Accordion.Root collapsible type="single" defaultValue={'1'}>
            {content.map((item, index) => (
              <Accordion.Item
                className={styles.item}
                value={(index + 1).toString()}
                key={index}
              >
                <Accordion.Header className={styles.header}>
                  <Accordion.Trigger className={styles.trigger}>
                    <Heading element="h5">{item.question}</Heading>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={styles.content}>
                  <Text variant={400}>{item.answer}</Text>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Container>
      </section>
    </Element>
  )
}
