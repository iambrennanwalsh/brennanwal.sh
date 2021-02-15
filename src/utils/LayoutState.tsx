export const LayoutState = (
	articles: App.ArticleResource[]
): {
	categories: string[]
	featured: App.ArticleResource[]
	cloud: [string, unknown][]
} => {
	const categories = articles.map(article => article.category)
	const featured = articles.filter(article => article.featured)
	const totals: {[index: string]: number} = {}
	const addTag = tag => {
		if (typeof totals[tag] == 'undefined') totals[tag] = 1
		else totals[tag]++
	}
	articles.forEach(article => article.tags.forEach(tag => addTag(tag)))
	const sortedTotals = Object.entries(totals).sort(([, a], [, b]) => b - a)
	const count = sortedTotals.length
	const maxRem = 2
	const minRem = 0.85
	const decrement = (maxRem - minRem) / (count - 1)
	const initialCloud = {}
	for (var i = 0; i < count; i++) {
		const rem = maxRem - i * decrement
		const tag = sortedTotals[i].shift()
		initialCloud[tag] = rem
	}
	const cloud = Object.entries(initialCloud).sort(() => 0.5 - Math.random())
	return {
		categories: [...new Set(categories)],
		featured: featured.slice(0, 4),
		cloud
	}
}
