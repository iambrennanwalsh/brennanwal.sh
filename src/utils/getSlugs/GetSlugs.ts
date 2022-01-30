import {readdirSync} from 'fs'
import {resolve} from 'path'

/**
 * GetSlugs
 * Returns an array of filenames within a directory.
 *
 * @param resource string The directory to return slugs from.
 * @param root string The root directory to search for resource in.
 * @returns string[]
 */
export const GetSlugs = (
  resource: string,
  root: string = './data'
): string[] => {
  const dir = resolve(root, resource)
  return readdirSync(dir)
}
