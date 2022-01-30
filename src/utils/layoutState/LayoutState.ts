import type {Resource} from '@/'

export const LayoutState = (
  articles: Resource[]
): {
  categories: string[]
  featured: Resource[]
} => {
  const categories = articles.map(article => article.category)
  const featured = articles.filter(article => article.featured)
  return {
    categories: Array.from(new Set(categories)),
    featured: featured.slice(0, 4)
  }
}
