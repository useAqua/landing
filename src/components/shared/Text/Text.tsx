import * as React from 'react'
import cx from 'classnames'

import styles from './Text.module.scss'

type TextVariants = 400 | 500

type TextProps = React.PropsWithChildren<{
  variant: TextVariants
}>

const Text = React.forwardRef<
  React.ElementRef<'p'>,
  React.ComponentPropsWithoutRef<'p'> & TextProps
>(({ children, variant, className, ...props }, forwardedRef) => (
  <p
    className={cx(styles.base, styles[`text-${variant}`], className)}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </p>
))

Text.displayName = 'Text'
export { Text }
