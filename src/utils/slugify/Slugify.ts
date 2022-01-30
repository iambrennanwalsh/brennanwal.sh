/**
 * Slugify
 * @description Takes a string and converts it to a valid web safe slug.
 *
 * @param str A string to convert to a valid slug.
 * @returns string
 */
export const Slugify = (str: string): string =>
  str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
