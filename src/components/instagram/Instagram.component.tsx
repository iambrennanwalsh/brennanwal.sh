import {StyledInstagram} from '.'

export const Instagram: App.InstagramComponent = ({styles, className}) => {
	const x = []
	for (var i = 1; i < 11; ++i) {
		x[i] = `/images/ig/${i}.jpeg`
	}

	return (
		<StyledInstagram
			{...(styles && {css: styles})}
			{...(className && {className: className})}>
			{x.map(img => (
				<div key={img} style={{backgroundImage: `url(${img})`}}></div>
			))}
		</StyledInstagram>
	)
}
