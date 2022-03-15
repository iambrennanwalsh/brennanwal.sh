import type { Resource } from '@/'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { extname, join, resolve } from 'path'
import { Slugify } from '../slugify'

export const GetResource = async <T extends Resource>(
  filename: string,
  resource: string
) => {
  const cwd = resolve('./data', resource)
  const file = join(cwd, filename)
  const fileContents = readFileSync(file, 'utf8')
  const { data, content } = matter(fileContents)
  const extension = extname(filename)
  const slug = Slugify(filename.split(extension)[0])
  return { content: content, slug: slug, ...data } as unknown as T
}
