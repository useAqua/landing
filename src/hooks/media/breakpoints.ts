function isKey<T extends {}>(
  object: T,
  key: PropertyKey | undefined | null,
): key is keyof T {
  return Boolean(key && key in object)
}

function prop<T extends {}>(
  object: T,
  key: PropertyKey | undefined | null,
): T[keyof T] | undefined {
  return isKey(object, key) ? object[key] : undefined
}

const mediaNames = {
  phone: 'phone',
} as const

export type MediaName = ValueOf<typeof mediaNames>

export const breakpoints = {
  max: {
    phone: 767,
  },
  min: {
    phone: 768,
  },
}

const convert = (
  obj: Record<MediaName, number>,
  minmax: keyof typeof breakpoints,
) =>
  Object.keys(obj).reduce(
    (acc, name) => {
      const mediaName = prop(mediaNames, name)
      if (!mediaName) {
        return acc
      }
      acc[mediaName as MediaName] =
        `(${minmax}-width: ${obj[mediaName as MediaName]}px)`
      return acc
    },
    {} as Record<MediaName, string>,
  )

export const min = convert(breakpoints.min, 'min')
export const max = convert(breakpoints.max, 'max')
