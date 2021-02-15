import {Image, Heading, Content} from '@/components'
import {StyledPageTitle} from '.'

export const PageTitle: App.PageTitleComponent = function ({
	title,
	description,
	image,
	className,
	styles
}) {
	return (
		<StyledPageTitle {...(styles && {css: styles})} {...(className && {className: className})}>
			{image && <Image lightbox src={image} />}
			<div>
				<Heading>{title}</Heading>
				{description && (
					<Content>
						<div dangerouslySetInnerHTML={{__html: description}} />
					</Content>
				)}
			</div>
		</StyledPageTitle>
	)
}
