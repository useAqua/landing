'use client'

import { useWindowSize } from './useWindowSize'

export const revealConfig = {
  delay: 0,
  origin: 'bottom',
  viewOffset: { top: 0, right: 0, left: 0, bottom: 100 },
}

export const revealConfigWithInterval = {
  ...revealConfig,
  interval: 100,
}

export const useRevealConfig = () => {
  const { width } = useWindowSize()

  if (!width) {
    return null
  }

  if (width >= 1021) {
    return {
      revealConfigWithInterval,
      revealConfig,
    }
  }

  return {
    revealConfig: {
      ...revealConfig,
      viewOffset: { top: 0, right: 0, left: 0, bottom: 25 },
    },
    revealConfigWithInterval: {
      ...revealConfigWithInterval,
      interval: 50,
      viewOffset: { top: 0, right: 0, left: 0, bottom: 0 },
    },
  }
}
