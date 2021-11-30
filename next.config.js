const {withSentryConfig} = require('@sentry/nextjs')

const moduleExports = {
	typescript: {
		ignoreBuildErrors: true
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	webpack5: false
}

const SentryWebpackPluginOptions = {
	silent: true
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)
