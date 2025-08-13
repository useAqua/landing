import { useCallback, useRef, useState } from 'react'
import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts'

export type WindowSize = {
  width: number
  height: number
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })

  const handleSize = useCallback(() => {
    const { clientWidth, clientHeight } = document.documentElement
    const reachedMinTriggerDifference =
      Math.abs(windowSize.height - clientHeight) < 100
    const isMobile = clientWidth < 834

    if (isMobile && reachedMinTriggerDifference) {
      return
    }

    setWindowSize({
      width: clientWidth,
      height: clientHeight,
    })
  }, [windowSize.height])

  const timeoutRef = useRef<number | null>(null)

  const throttledHandleSize = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = window.setTimeout(handleSize, 100)
  }, [handleSize])

  useEventListener('resize', throttledHandleSize)

  useIsomorphicLayoutEffect(() => {
    handleSize()
  }, [])

  return windowSize
}
