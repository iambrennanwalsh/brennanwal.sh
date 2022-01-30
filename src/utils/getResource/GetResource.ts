import type {Resource} from '@/'
import {bundleMDX} from 'mdx-bundler'
import {extname, join, resolve} from 'path'

export const GetResource = async (filename: string, resource: string) => {
  const cwd = resolve('./data', resource)
  const file = join(cwd, filename)
  const {code, frontmatter} = await bundleMDX<Resource>({
    file,
    cwd,
  })
  const extension = extname(filename)
  const slug = filename.split(extension)[0]
  return {
    code,
    href: slug,
    ...frontmatter,
  }
}
