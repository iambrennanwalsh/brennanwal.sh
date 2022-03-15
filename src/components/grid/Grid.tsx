import type { Article, Project, Props } from '@/'
import { Pagination } from '@/components'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import { StyledGrid } from '.'

interface GridOwnProps<T extends Project | Article> {
  data: T[]
  template: (data: T) => ReactNode
  baseUrl: string
}

export type GridProps<T extends Project | Article> = Props<
  typeof StyledGrid,
  GridOwnProps<T>
>

export function Grid<T extends Project | Article = Project>({
  data,
  template,
  baseUrl,
  ...props
}: GridProps<T>) {
  const router = useRouter()
  const page = router.query.page
  const [pageCount, setPageCount] = useState<number>()
  const [slice, setSlice] = useState<T[]>([])

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
        <div>
          {slice.length > 0 &&
            slice.map(post => (
              <div key={post.title}>
                <div>{template(post)}</div>
              </div>
            ))}
        </div>
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
