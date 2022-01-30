import {Component, Props} from '@/'
import {StyledInstagram} from '.'

export type InstagramProps = Props<typeof StyledInstagram>

export const Instagram: Component<InstagramProps> = props => {
  const images: string[] = []
  for (var i = 1; i < 11; ++i) {
    images[i] = `/images/ig/${i}.jpeg`
  }

  return (
    <StyledInstagram {...props}>
      {images.map(img => (
        <div key={img} style={{backgroundImage: `url(${img})`}} />
      ))}
    </StyledInstagram>
  )
}
