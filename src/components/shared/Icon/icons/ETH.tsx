import { ComponentPropsWithoutRef, forwardRef } from 'react'

type Props = ComponentPropsWithoutRef<'svg'>

export const ETH = forwardRef<SVGSVGElement, Props>(function ETH(props, ref) {
  return (
    <svg
      width="19"
      height="31"
      viewBox="0 0 19 31"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        d="M9.49707 30.9434V30.9424L0 17.5596L9.49707 23.1709L19 17.5596L9.49707 30.9434ZM18.9951 15.7588L9.49707 21.3721L0 15.7588L9.49707 0L18.9951 15.7588Z"
        fill="currentColor"
      />
    </svg>
  )
})
