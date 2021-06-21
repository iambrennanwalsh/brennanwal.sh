import {StyledBox} from '.'
import {Heading} from '@/components'

export const Box: App.BoxComponent = ({className, styles, children}) => {
	return (
		<StyledBox
			{...(styles && {css: styles})}
			{...(className && {className: className})}>
			{children}
		</StyledBox>
	)
}

const BoxHeading: App.BoxHeadingComponent = props => {
	return <Heading {...props} level={2} />
}

Box.Heading = BoxHeading
