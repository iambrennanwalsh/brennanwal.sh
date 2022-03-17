import type { Resource } from '@/'
import { readFile } from 'fs/promises'
import matter from 'gray-matter'
import { extname, join, resolve } from 'path'
import { getSlug } from '../getSlug'

/**
 * Get a resource by filename and resource type.
 *
 * @param file A resources filename.
 * @param resource A resource type.
 * @returns A compiled resource.
 */
export const getResource = async <T extends Resource>(
  file: string,
  resource: string
): Promise<T> => {
  const dir = resolve('./data', resource)
  const path = join(dir, file)
  const contents = await readFile(path, 'utf8')
  const { data, content } = matter(contents)
  const fileExtension = extname(file)
  const slug = file.split(fileExtension)[0]
  return {
    content: content,
    slug: getSlug(slug),
    ...data
  } as unknown as T
}
