const {withSentryConfig} = require('@sentry/nextjs')

const moduleExports = {
	typescript: {
		ignoreBuildErrors: true
	}
}

const SentryWebpackPluginOptions = {
	silent: true
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)
