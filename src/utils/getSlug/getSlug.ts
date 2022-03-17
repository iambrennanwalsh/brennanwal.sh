/**
 * Convert a string to a web safe slug.
 *
 * @param str A string to convert.
 * @returns A web safe slug.
 */
export function getSlug(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}
