import type { Component, Props } from '@/'
import { Anchor } from '@/components'
import { useApiContext } from '@/hooks'
import { getSlug } from '@/utils/getSlug'
import { useEffect, useState } from 'react'
import { StyledCloud, StyledCloudNode } from '.'

export type CloudProps = Props<typeof StyledCloud>

export const Cloud: Component<CloudProps> = props => {
  const { resources } = useApiContext()
  const [cloud, setCloud] = useState<[string, number][]>([])

  useEffect(() => {
    const tagCount: Record<string, number> = {}
    if ('articles' in resources) {
      resources.articles?.forEach(article => {
        if (typeof article.tags !== 'undefined') {
          article.tags.forEach(tag => {
            if (typeof tagCount[tag] == 'undefined') tagCount[tag] = 1
            else tagCount[tag]++
          })
        }
      })
    }
    const sortedTags = Object.entries(tagCount).sort(([, a], [, b]) => b - a)
    const maxRem = 1.5
    const minRem = 0.85
    const decrement = (maxRem - minRem) / (sortedTags.length - 1)
    const initialCloud: Record<string, number> = {}
    sortedTags.forEach((sortedTag, i) => {
      const rem = maxRem - i * decrement
      const tag = sortedTag[0]
      if (tag) {
        initialCloud[tag] = rem
      }
    })
    setCloud(Object.entries(initialCloud).sort(() => 0.5 - Math.random()))
  }, [resources])

  return (
    <StyledCloud {...props}>
      {cloud.map(([name, size]) => (
        <Anchor key={name} href={`/tag/${getSlug(name)}`}>
          <StyledCloudNode
            css={{ fontSize: `${size}rem` }}
            color={size > 1.25 ? 'secondary' : 'light'}>
            {name}
          </StyledCloudNode>
        </Anchor>
      ))}
    </StyledCloud>
  )
}
