import {useState, useEffect} from 'react'
import {getMediaByUsername} from 'nanogram.js'
import {StyledInstagram} from '.'

export const Instagram: App.InstagramComponent = ({styles, className}) => {
	const [igFeed, setIgFeed] = useState<string[]>([])

	useEffect(() => {
		const feed = JSON.parse(localStorage.getItem('feed') as string)
		if (feed) {
			setIgFeed(feed)
		} else {
			setIgFeed([])
			getMediaByUsername('iambrennanwalsh').then(media => {
				let images = media!.profile!.edge_owner_to_timeline_media.edges!
				images = images.splice(0, 10)
				const items = images.map(img => img.node.thumbnail_resources[4].src)
				setIgFeed(items)
				localStorage.setItem('feed', JSON.stringify(items))
			})
		}
	}, [])

	return (
		<StyledInstagram {...(styles && {css: styles})} {...(className && {className: className})}>
			{igFeed.map(img => (
				<div key={img} style={{backgroundImage: `url(${img})`}}></div>
			))}
		</StyledInstagram>
	)
}
