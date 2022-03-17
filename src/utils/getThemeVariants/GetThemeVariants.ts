import type { Css } from '@/styles'
import { theme } from '@/styles'
import type { CSSProperties } from '@stitches/react'

/**
 * Generate variants dynamically. Returns a variant for each token in your theme scale set to a css property.
 *
 * @param scale - A scale from your theme.
 * @param property - A css property you'd like to apply the value of each token
 *
 * @throws
 * Throws an error if the passed scale doesn't exist within your theme.
 *
 * @example
 * Given your theme has a `colors` scale with tokens `info`, and `success`.
 * ```
 * ThemeVariants('colors', 'color')
 * // Returns..
 * {
 *   info: {
 *     color: '$info'
 *   },
 *   success: {
 *     color: '$success'
 *   }
 * }
 * ```
 */
export const getThemeVariants = <
  T extends keyof typeof theme,
  C extends keyof CSSProperties
>(
  scale: T,
  property: C
): Record<keyof typeof theme[T], Css> => {
  const variants: Record<string, Record<string, string>> = {}
  if (!(scale in theme)) {
    throw new Error(
      'The value of the scale parameter must be a valid scale from your theme.'
    )
  }
  const themeScale = theme[scale]
  if (typeof themeScale == 'object') {
    Object.keys(themeScale).forEach(key => {
      variants[key] = {
        [property]: `$${key}`
      }
    })
  }
  return variants as Record<keyof typeof theme[T], Css>
}
