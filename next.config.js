const {withSentryConfig} = require('@sentry/nextjs')

const moduleExports = {
	typescript: {
		ignoreBuildErrors: true
	},
	eslint: {
		ignoreDuringBuilds: true
	}
}

const SentryWebpackPluginOptions = {
	silent: true
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)
