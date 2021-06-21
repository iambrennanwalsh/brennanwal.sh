import Head from 'next/head'
import {useRouter} from 'next/router'

export const Seo: App.SeoComponent = ({
	title = 'Web Developer and Entrepreneur',
	description = 'Im a web, mobile, and desktop applications developer, and entrepreneur. Welcome to my personal blog, portfolio, and home page.',
	image = 'https://brennanwalsh.sh/images/slides/slider.jpg'
}) => {
	const {asPath} = useRouter()
	return (
		<Head>
			<title key="title">{title} • Brennan Walsh</title>
			<meta name="description" content={description} key="description" />
			<meta
				name="author"
				content="Brennan Walsh / mail@brennanwal.sh / @iambrennanwalsh"
				key="author"
			/>
			<meta property="og:type" content="website" key="og-type" />
			<meta
				property="og:url"
				content={`https://brennanwal.sh${asPath}`}
				key="og-url"
			/>
			<meta property="og:title" content={title} key="og-title" />
			<meta
				property="og:description"
				content={description}
				key="og-description"
			/>
			<meta property="og:image" content={image} key="og-image" />
			<meta
				property="twitter:card"
				content="summary_large_image"
				key="twitter-card"
			/>
			<meta
				property="twitter:url"
				content={`https://brennanwal.sh${asPath}`}
				key="twitter-url"
			/>
			<meta property="twitter:title" content={title} key="twitter-title" />
			<meta
				property="twitter:description"
				content={description}
				key="twitter-description"
			/>
			<meta property="twitter:image" content={image} key="twitter-image" />
		</Head>
	)
}
