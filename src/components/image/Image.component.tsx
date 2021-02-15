import {StyledImage, StyledFigure, StyledFigCaption} from '.'

export const Image: App.ImageComponent = function ({
	src,
	alt,
	caption,
	lightbox = false,
	styles,
	className
}) {
	const emit = () => {
		const event = new CustomEvent('modal', {
			detail: <Image src={src} alt={alt} caption={caption} />
		})
		window.dispatchEvent(event)
	}

	const img = (
		<StyledImage
			src={src}
			{...(alt && {alt: alt})}
			{...(lightbox && {onClick: () => emit()})}
			{...(styles && {css: styles})}
			{...(className && {className: className})}
		/>
	)

	const captionedImage = (
		<StyledFigure {...(styles && {css: styles})} {...(className && {className: className})}>
			<StyledImage src={src} {...(alt && {alt: alt})} {...(lightbox && {onClick: () => emit()})} />
			<StyledFigCaption>{caption}</StyledFigCaption>
		</StyledFigure>
	)

	return caption ? captionedImage : img
}
