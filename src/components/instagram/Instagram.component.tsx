import {useState, useEffect} from 'react'
import {getMediaByUsername} from 'nanogram.js'
import {StyledInstagram} from '.'

export const Instagram: App.InstagramComponent = ({styles, className}) => {
	const [igFeed, setIgFeed] = useState<{feed?: string[]; time?: number}>({
		feed: [],
		time: 0
	})

	useEffect(() => {
		const feed = JSON.parse(localStorage.getItem('feed') as string)
		const time = Date.now()
		if (feed && time - feed.time < 86400000) {
			setIgFeed(feed)
		} else {
			console.log('Pulling IG images from cache.')
			setIgFeed({
				feed: [],
				time: 0
			})
			getMediaByUsername('iambrennanwalsh').then(media => {
				let images = media!.profile!.edge_owner_to_timeline_media.edges!
				images = images.splice(0, 10)
				const items = images.map(img => img.node.thumbnail_resources[4].src)
				const feed = {feed: items, time: time}
				setIgFeed(feed)
				localStorage.setItem('feed', JSON.stringify(feed))
			})
		}
	}, [])

	return (
		<StyledInstagram {...(styles && {css: styles})} {...(className && {className: className})}>
			{igFeed.feed.map(img => (
				<div key={img} style={{backgroundImage: `url(${img})`}}></div>
			))}
		</StyledInstagram>
	)
}
