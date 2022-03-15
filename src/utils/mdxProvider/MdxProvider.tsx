import * as Components from '@/components'
import { MDXProvider } from '@mdx-js/react'

export const ComponentsProvider = Components

export const MarkdownProvider = {
  component: MDXProvider,
  props: {
    components: {
      code: Components.Code
    }
  }
}
