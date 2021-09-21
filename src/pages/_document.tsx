import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<link rel="shortcut icon" href="/images/interface/favicon.png" />
				</Head>
				<meta name="robots" content="noindex" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
