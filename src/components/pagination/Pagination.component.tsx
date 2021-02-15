// Pagination (client/src/component/pagination/Pagination.component)

import React from 'react'
import {Icon} from '@/components'
import {StyledPagination, StyledPaginationArrow, StyledPaginationLink} from './Pagination.styles'

export const Pagination: App.PaginationComponent = function ({
	currentPage,
	pageCount,
	baseUrl,
	className,
	styles
}) {
	const links = Array.from({length: pageCount}, (_v, k) => k + 1)
	return (
		<StyledPagination {...(styles && {css: styles})} {...(className && {className: className})}>
			{currentPage > 1 && (
				<StyledPaginationArrow shallow href={`${baseUrl}?page=${currentPage - 1}`}>
					<Icon type="left" />
				</StyledPaginationArrow>
			)}
			{links.map(i => (
				<StyledPaginationLink
					shallow
					key={i}
					activeClassName="active"
					href={`${baseUrl}?page=${i}`}>
					{i}
				</StyledPaginationLink>
			))}
			{currentPage !== pageCount && (
				<StyledPaginationArrow shallow href={`${baseUrl}?page=${currentPage + 1}`}>
					<Icon type="right" />
				</StyledPaginationArrow>
			)}
		</StyledPagination>
	)
}
