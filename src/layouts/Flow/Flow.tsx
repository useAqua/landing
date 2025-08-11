import * as React from 'react'

import { Button, Container, Heading, Text } from '@/components'

import styles from './styles.module.scss'

import Chart from '@public/flow-chart.webp'
import Image from 'next/image'

export const Flow: React.FC = () => {
  return (
    <Container className={styles.base}>
      <Heading element="h2" className={styles.title}>
        Flow Where <br /> <b>Yield Grows</b>
      </Heading>
      <Text variant={400} className={styles.text}>
        Aqua vaults keep capital actively allocated to the most reliable and
        rewarding strategies
      </Text>
      <Button size={66} variant="white">
        Start Earning
      </Button>
      <div className={styles.image}>
        <Image src={Chart} quality={100} alt="image" placeholder="blur" fill />
      </div>
    </Container>
  )
}
