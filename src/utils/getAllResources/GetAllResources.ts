import { Resource } from '@/'
import { GetResource } from '@/utils/getResource'
import { GetSlugs } from '@/utils/getSlugs'

export const GetAllResources = async <T extends Resource>(resource: string) => {
  const filenames = GetSlugs(resource)
  return Promise.all(
    filenames.map(file => GetResource<T>(file, resource))
  ).then(posts =>
    posts.sort((a, b) =>
      new Date(a.timestamp) < new Date(b.timestamp) ? 1 : -1
    )
  )
}
