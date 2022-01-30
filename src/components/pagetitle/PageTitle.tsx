import {Component, Props} from '@/'
import {
  StyledPageTitleContainer,
  StyledPageTitleHeading,
  StyledPageTitleImage,
  StyledPageTitleSummary,
} from '.'

interface PageTitleOwnProps {
  title: string
  description: string
  image?: string
}

export type PageTitleProps = Props<'div', PageTitleOwnProps>

export const PageTitle: Component<PageTitleProps> = ({
  title,
  description,
  image,
  ...props
}) => {
  return (
    <div {...props}>
      {image && <StyledPageTitleImage lightbox alt={title} src={image} />}
      <StyledPageTitleContainer>
        <StyledPageTitleHeading>{title}</StyledPageTitleHeading>
        <StyledPageTitleSummary
          dangerouslySetInnerHTML={{__html: description}}
        />
      </StyledPageTitleContainer>
    </div>
  )
}
