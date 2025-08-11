import * as React from 'react'

export const useTouchPad = () => {
  const [isTouchPad, setIsTouchPad] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    if (typeof isTouchPad === 'boolean') return

    const handler = (e: any) => {
      try {
        const isTouchPad = e.wheelDeltaY
          ? e.wheelDeltaY === -3 * e.deltaY
          : e.deltaMode === 0
        setIsTouchPad(isTouchPad)
      } catch (error) {
        console.error(error)
      }
    }

    window.addEventListener('mousewheel', handler)
    document.addEventListener('DOMMouseScroll', handler)

    return () => {
      window.removeEventListener('mousewheel', handler)
      document.removeEventListener('DOMMouseScroll', handler)
    }
  }, [isTouchPad])

  return isTouchPad
}
