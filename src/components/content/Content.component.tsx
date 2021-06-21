import {StyledContent} from '.'
import {Code, Seperator, Image, Heading, Text} from '@/components'
import {useChildren} from '@/hooks'

export const Content: App.ContentComponent = ({
	className,
	styles,
	children
}) => {
	const Children = useChildren(children)
	const CodeComponent = Children.withType(Code)
	return (
		<StyledContent
			{...(styles && {css: styles})}
			{...(className && {className: className})}>
			{Children.withoutTypes([Code])}
			{CodeComponent ? CodeComponent : <Seperator />}
		</StyledContent>
	)
}

const ContentCode: App.ContentCodeComponent = function (props) {
	return <Code {...props} />
}

const ContentImage: App.ContentImageComponent = function (props) {
	return <Image {...props} />
}

const ContentHeading: App.ContentHeadingComponent = function (props) {
	return <Heading {...props} level={3} />
}

const ContentParagraph: App.ContentParagraphComponent = function (props) {
	return <Text element="p" {...props} />
}

Content.Code = ContentCode
Content.Image = ContentImage
Content.Heading = ContentHeading
Content.Paragraph = ContentParagraph
