import {Component, Props} from '@/'
import {StyledImage} from '.'

interface ImageOwnProps {
  caption?: string
  lightbox?: boolean
}

export type ImageProps = Props<typeof StyledImage, ImageOwnProps>

export const Image: Component<ImageProps> = ({
  alt,
  caption,
  lightbox,
  ...props
}) => {
  const emitLightboxEvent = () => {
    const event = new CustomEvent('lightbox', {
      detail: <Image alt={alt} caption={caption} {...props} />
    })
    window.dispatchEvent(event)
  }

  const Img: Component<ImageProps> = props => (
    <StyledImage
      alt={alt}
      {...(lightbox && {onClick: () => emitLightboxEvent()})}
      {...props}
    />
  )

  const CaptionedImage: Component<ImageProps> = props => (
    <figure>
      <Img {...props} />
      <figcaption>{caption}</figcaption>
    </figure>
  )

  return caption ? (
    <CaptionedImage {...props} />
  ) : (
    <Img {...props} data-component="image" />
  )
}

Image.toString = () => '[data-component="image"]'
