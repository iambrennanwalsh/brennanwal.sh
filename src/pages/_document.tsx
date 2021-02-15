import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<link rel="shortcut icon" href="/images/interface/favicon.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
