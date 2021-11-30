// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/browser'
import {Integrations as TracingIntegrations} from '@sentry/tracing'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
	integrations: [new TracingIntegrations.BrowserTracing()],
	dsn:
		SENTRY_DSN ||
		'https://99d5def124e24a9481115f9cc2165e2d@o283308.ingest.sentry.io/6087642',
	// Adjust this value in production, or use tracesSampler for greater control
	tracesSampleRate: 0.2

	// ...
	// Note: if you want to override the automatic release value, do not set a
	// `release` value here - use the environment variable `SENTRY_RELEASE`, so
	// that it will also get attached to your source maps
})
