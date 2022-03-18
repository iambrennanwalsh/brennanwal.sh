const path = require('path')
/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
  eslint: {
    dirs: ['src']
  }
}
