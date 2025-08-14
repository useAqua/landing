import * as React from 'react'
import { Container, Text } from '../shared'
import { socials } from '@/common'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.base}>
      <div className={styles.title}>
        {Array.from({ length: 3 }).map((_, index) => (
          <span key={index} className={styles.word}>
            Aqua
          </span>
        ))}
      </div>
      <div className={styles.row}>
        <Container className={styles.container}>
          <Text variant={400} className={styles.copyright}>
            © 2025 Aqua
          </Text>
          <div className={styles.socials}>
            {socials.map((item, index) => (
              <a href={item.link} key={index} className={styles.link}>
                <Text variant={500}>{item.title}</Text>
              </a>
            ))}
          </div>
          <Text variant={400} className={styles.author}>
            Built with 💧 by Aqua Labs
          </Text>
        </Container>
      </div>
    </footer>
  )
}

export { Footer }
