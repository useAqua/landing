import React from 'react'
import cx from 'classnames'

import styles from './Button.module.scss'
import { Icon } from '../Icon'

export type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
  children?: React.ReactNode
  size?: 66 | 46
  variant?: 'blue' | 'white'
  as?: E
}

export type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps>

const defaultElement = 'button'

export function Button<E extends React.ElementType = typeof defaultElement>({
  children,
  variant,
  size,
  as,
  className,
  ...rest
}: ButtonProps<E>) {
  const TagName = as || defaultElement

  return (
    <TagName
      className={cx(
        styles.button,
        styles['variant-' + variant],
        styles['size-' + size],
        rest?.disabled && styles.disabled,
        className,
      )}
      {...rest}
    >
      <span>{children}</span>
      {size === 66 && (
        <span className={styles.box}>
          <span className={styles.text}>{children}</span>
          <span className={styles.arrow}>
            <Icon glyph={'Arrow'} />
          </span>
        </span>
      )}
      {size === 46 && <span className={styles.bg} />}
    </TagName>
  )
}
