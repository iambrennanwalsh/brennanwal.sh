import type { Resource } from '@/'
import { getFiles, getResource } from '@/utils'

/**
 * Get all resources of a type.
 *
 * @param resource A resource type.
 * @returns All resources of a type.
 */
export const getAllResources = <T extends Resource>(resource: string): T[] => {
  const files = getFiles(resource)

  const resources = files.map(file => getResource<T>(file, resource))
  return resources.sort((a, b) =>
    new Date(a.timestamp) < new Date(b.timestamp) ? 1 : -1
  )
}
