import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = (resource: string): string =>
	path.resolve(`./data/${resource}`)

export const getSlugs: App.GetSlugs = resource => {
	const dir = contentDirectory(resource)
	return fs.readdirSync(dir)
}

export const get: App.Get = (file, resource) => {
	const dir = contentDirectory(resource)
	const fullPath = path.join(dir, file)
	const ext = path.extname(file)
	const slug = file.split(ext)
	const fileContents = fs.readFileSync(fullPath, 'utf8')
	const {data, content} = matter(fileContents)
	return {content: content, slug: slug[0], ...data}
}

export const getAll: App.GetAll = resource => {
	const filenames = getSlugs(resource)
	const posts = filenames
		.map(file => get(file, resource))
		.sort((a, b) =>
			new Date(a.timestamp as string) < new Date(b.timestamp as string) ? 1 : -1
		)
	return posts
}
