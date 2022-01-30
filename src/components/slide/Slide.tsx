import type {Component, Props} from '@/'
import {Content} from '@/components'
import {StyledSlide, StyledSlideQuote, StyledSlideSource} from '.'

interface SlideOwnProps {
  quote?: string
  source?: string
}

export type SlideProps = Props<typeof StyledSlide, SlideOwnProps>

export const Slide: Component<SlideProps> = ({quote, source, ...props}) => {
  return (
    <StyledSlide {...props}>
      <Content withSeperator={false}>
        {quote && <StyledSlideQuote>{quote}</StyledSlideQuote>}
        {source && <StyledSlideSource>{source}</StyledSlideSource>}
      </Content>
    </StyledSlide>
  )
}
