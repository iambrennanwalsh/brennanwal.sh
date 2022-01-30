import {Component, Props} from '@/'
import {StyledPagination, StyledPaginationLink} from '.'

interface PaginationOwnProps {
  currentPage: number
  pageCount: number
  baseUrl: string
}

export type PaginationProps = Props<typeof StyledPagination, PaginationOwnProps>

export const Pagination: Component<PaginationProps> = ({
  currentPage,
  pageCount,
  baseUrl,
  ...props
}) => {
  const links = Array.from({length: pageCount}, (_v, k) => k + 1)

  return (
    <StyledPagination {...props}>
      {links.map(link => (
        <StyledPaginationLink
          active={currentPage == link}
          shallow
          key={link}
          href={`${baseUrl}?page=${link}`}
        >
          {link}
        </StyledPaginationLink>
      ))}
    </StyledPagination>
  )
}
