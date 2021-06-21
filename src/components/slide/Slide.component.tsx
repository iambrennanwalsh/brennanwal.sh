import {StyledSlide} from '.'
import {Content, Text} from '@/components'

export const Slide: App.SlideComponent = function ({
	name,
	quote,
	source,
	className,
	styles
}) {
	return (
		<StyledSlide
			{...(styles && {css: styles})}
			className={`${name} ${className !== undefined && className}`}>
			<Content>
				{quote && <Text className="quote">{quote}</Text>}
				{source && <Text className="source">{source}</Text>}
			</Content>
		</StyledSlide>
	)
}
