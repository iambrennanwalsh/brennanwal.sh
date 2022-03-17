import { readdirSync } from 'fs'
import { resolve } from 'path'

/**
 * Returns an array of filenames within a directory.
 *
 * @param resource - A resource type.
 * @param root - The root data directory.
 * @returns An array of filenames.
 */
export function getFiles(resource: string, root: string = './data'): string[] {
  const dir = resolve(root, resource)
  return readdirSync(dir)
}
