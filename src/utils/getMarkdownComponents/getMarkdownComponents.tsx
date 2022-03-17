import { Box, Code, Content } from '@/components'
import { MDXProvider } from '@mdx-js/react'
/**
 * Get the components object to pass to MDXProvider.
 *
 * @returns MDXProvider components.
 */
export function getMarkdownComponents() {
  return {
    component: MDXProvider,
    props: {
      components: {
        Box: Box,
        Content: Content,
        code: Code
      }
    }
  }
}
