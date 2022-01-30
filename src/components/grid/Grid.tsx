import type {Component, Props, Resource} from '@/'
import {Pagination} from '@/components'
import {useRouter} from 'next/router'
import type {ReactNode} from 'react'
import {useEffect, useState} from 'react'
import FlipMove from 'react-flip-move'
import {StyledGrid} from '.'

interface GridOwnProps {
  data: Resource[]
  template: (data: Resource) => ReactNode
  baseUrl: string
}

export type GridProps = Props<typeof StyledGrid, GridOwnProps>

export const Grid: Component<GridProps> = ({
  data,
  template,
  baseUrl,
  ...props
}) => {
  const router = useRouter()
  const page = router.query.page
  const [pageCount, setPageCount] = useState<number | undefined>()
  const [slice, setSlice] = useState<Resource[]>([])

  useEffect(() => {
    const calculateSlice = () => {
      const currentPage = Number(page ?? 1)
      const from = (currentPage - 1) * 9
      const to = currentPage * 9 > data.length ? data.length : currentPage * 9
      return data.slice(from, to)
    }

    const calculatePageCount = () => {
      return Math.ceil(data.length / 9)
    }

    if (data.length) {
      const count = calculatePageCount()
      const dataSlice = calculateSlice()
      setPageCount(count)
      setSlice(dataSlice)
    }
  }, [page, data])

  return (
    <>
      <StyledGrid {...props}>
        <FlipMove maintainContainerHeight>
          {slice.length > 0 &&
            slice.map(post => (
              <div key={post.href}>
                <div>{template(post)}</div>
              </div>
            ))}
        </FlipMove>
      </StyledGrid>
      {pageCount && pageCount > 1 && (
        <Pagination
          currentPage={Number(page ?? 1)}
          pageCount={pageCount}
          baseUrl={baseUrl}
        />
      )}
    </>
  )
}
