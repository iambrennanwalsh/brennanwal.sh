import type {Component, Props} from '@/'
import {Anchor} from '@/components'
import {useApiContext} from '@/hooks'
import {Slugify} from '@/utils/slugify/Slugify'
import {useState} from 'react'
import {StyledCloud, StyledCloudNode} from '.'

export type CloudProps = Props<typeof StyledCloud>

export const Cloud: Component<CloudProps> = props => {
  const {resources} = useApiContext()
  const [cloud] = useState(() => {
    const tagCount: {[index: string]: number} = {}
    if ('articles' in resources) {
      resources.articles.forEach(article => {
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
    const initialCloud: {[index: string]: number} = {}
    sortedTags.forEach((sortedTag, i) => {
      const rem = maxRem - i * decrement
      const tag = sortedTag[0]
      if (tag) {
        initialCloud[tag] = rem
      }
    })
    return Object.entries(initialCloud).sort(() => 0.5 - Math.random())
  })

  return (
    <StyledCloud {...props}>
      {cloud.map(node => (
        <Anchor key={node[0]} href={`/tag/${Slugify(node[0])}`}>
          <StyledCloudNode
            css={{fontSize: `${node[1]}rem`}}
            color={node[1] > 1.25 ? 'secondary' : 'lighter'}
          >
            {node[0]}
          </StyledCloudNode>
        </Anchor>
      ))}
    </StyledCloud>
  )
}
