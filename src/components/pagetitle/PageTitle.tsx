import { Component, Props } from '@/'
import { useComponentContext } from '@/hooks'
import React, { useEffect } from 'react'
import {
  StyledPageTitleContainer,
  StyledPageTitleHeading,
  StyledPageTitleImage,
  StyledPageTitleSummary
} from '.'

interface PageTitleOwnProps {
  title: string
  description: string
  image?: string
}

interface PageTitleData {
  pageTitle: {
    title: string
    description: string
    image?: string
  }
}

export type PageTitleProps = Props<'div', PageTitleOwnProps>

export const PageTitle: Component<PageTitleProps> = ({
  title,
  description,
  image,
  ...props
}) => {
  const { data, setData } = useComponentContext() as {
    data: PageTitleData
    setData: React.Dispatch<React.SetStateAction<PageTitleData>>
  }

  useEffect(() => {
    setData({
      ...data,
      pageTitle: { image: image, description: description, title: title }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, image])

  return (
    <div {...props}>
      {data.pageTitle?.image && (
        <StyledPageTitleImage
          lightbox
          alt={data.pageTitle?.title}
          src={data.pageTitle?.image}
        />
      )}
      <StyledPageTitleContainer>
        <StyledPageTitleHeading>{data.pageTitle?.title}</StyledPageTitleHeading>
        <StyledPageTitleSummary
          dangerouslySetInnerHTML={{
            __html: data.pageTitle?.description
          }}
        />
      </StyledPageTitleContainer>
    </div>
  )
}
