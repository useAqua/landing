'use client'

import * as React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

import { Button, Container, Heading, Text } from '@/components'

import styles from './styles.module.scss'

const Flow: React.FC = () => {
  const lottieRef = React.useRef<any>(null)
  const ref = React.useRef<HTMLDivElement>(null)
  const played = React.useRef(false)

  React.useEffect(() => {
    function checkCross() {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const viewportCenterY = window.innerHeight / 1.5

      if (
        rect.bottom - ref.current.offsetHeight <= viewportCenterY &&
        !played.current &&
        lottieRef.current
      ) {
        lottieRef.current.play()
        played.current = true
      }
    }

    window.addEventListener('scroll', checkCross)
    window.addEventListener('resize', checkCross)
    checkCross()

    return () => {
      window.removeEventListener('scroll', checkCross)
      window.removeEventListener('resize', checkCross)
    }
  }, [])

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
      <div className={styles.image} ref={ref}>
        <Player
          src={'/Chart.json'}
          keepLastFrame
          lottieRef={(animationRef) => (lottieRef.current = animationRef)}
          className={styles.lottie}
        />
      </div>
    </Container>
  )
}

export default Flow
