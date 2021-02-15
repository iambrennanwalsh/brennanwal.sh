import {useEffect, useState} from 'react'
import {Pagination} from '@/components'
import {StyledGrid} from '.'
import FlipMove from 'react-flip-move'
import {useRouter} from 'next/router'

export function Grid<T extends App.MarkdownResource>({
	data,
	template,
	baseUrl,
	className,
	styles
}: App.GridProps<T>): React.ReactElement {
	const router = useRouter()
	const page = router.query.page
	const [pageCount, setPageCount] = useState<number | undefined>()
	const [slice, setSlice] = useState<T[]>([])

	const calculatePageCount = () => {
		return Math.ceil(data.length / 9)
	}

	const calculateSlice = () => {
		const currentPage = Number(page ?? 1)
		const from = (currentPage - 1) * 9
		const to = currentPage * 9 > data.length ? data.length : currentPage * 9
		return data.slice(from, to)
	}

	useEffect(() => {
		if (data.length) {
			const count = calculatePageCount()
			const dataSlice = calculateSlice()
			setPageCount(count)
			setSlice(dataSlice)
		}
	}, [page, data])

	return (
		<>
			<StyledGrid {...(styles && {css: styles})} {...(className && {className: className})}>
				<FlipMove maintainContainerHeight>
					{slice.length > 0 &&
						slice.map(post => (
							<div key={post.slug}>
								<div>{template(post)}</div>
							</div>
						))}
				</FlipMove>
			</StyledGrid>
			{pageCount !== undefined && pageCount > 1 && (
				<Pagination currentPage={Number(page ?? 1)} pageCount={pageCount} baseUrl={baseUrl} />
			)}
		</>
	)
}
