'use client'

import * as React from 'react'
import cx from 'classnames'
import { Link } from 'react-scroll'

import { LAUNCH_APP_LINK, socials } from '@/common'
import { Button, Container, Icon, Text } from '../shared'

import Image from 'next/image'

import styles from './Header.module.scss'

type HeaderProps = {
  className?: string
}

const navigation = [
  {
    text: 'How It Works',
    target: 'how',
  },
  {
    text: 'Vaults',
    target: 'vaults',
  },
  {
    text: 'Why Use Aqua',
    target: 'why',
  },
  {
    text: 'FAQ',
    target: 'faq',
  },
]

const Header = ({ className }: HeaderProps) => {
  const [menuOpened, setMenuOpened] = React.useState(false)

  return (
    <React.Fragment>
      <header className={cx(styles.base, className)}>
        <Container className={styles.container}>
          <Image
            src={'/logotype.svg'}
            width={117}
            height={34}
            alt="logotype"
            className={styles.logotype}
          />
          <nav className={styles.nav}>
            {navigation.map((item) => (
              <Link
                to={item.target}
                smooth={true}
                duration={500}
                key={item.target}
                className={styles.link}
              >
                <Text variant={500}>{item.text}</Text>
              </Link>
            ))}
          </nav>
          <Button
            as="a"
            href={LAUNCH_APP_LINK}
            size={46}
            variant={'blue'}
            className={styles.button}
          >
            Launch App
          </Button>
          <button
            className={styles.burger}
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <Icon glyph={menuOpened ? 'Cross' : 'Burger'} />
          </button>
        </Container>
      </header>
      <div className={cx(styles.menu, menuOpened && styles.visible)}>
        <Container className={styles.menuContainer}>
          <nav className={styles.menuNav}>
            {navigation.map((item) => (
              <Link
                to={item.target}
                smooth={true}
                duration={500}
                key={item.target}
                className={styles.menuLink}
                onClick={() => setMenuOpened(false)}
              >
                {item.text}
              </Link>
            ))}
          </nav>
          <div className={styles.menuSocials}>
            {socials.map((item, index) => (
              <a href={item.link} key={index} className={styles.menuSocial}>
                <Text variant={500}>{item.title}</Text>
              </a>
            ))}
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export { Header }
