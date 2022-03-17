import type { Resource } from '@/'
import { getFiles } from '@/utils/getFiles/getFiles'
import { getResource } from '@/utils/getResource/getResource'

/**
 * Get all resources of a type.
 *
 * @param resource A resource type.
 * @returns All resources of a type.
 */
export const getAllResources = async <T extends Resource>(
  resource: string
): Promise<T[]> => {
  const files = getFiles(resource)

  return Promise.all(files.map(file => getResource<T>(file, resource))).then(
    posts =>
      posts.sort((a, b) =>
        new Date(a.timestamp) < new Date(b.timestamp) ? 1 : -1
      )
  )
}
