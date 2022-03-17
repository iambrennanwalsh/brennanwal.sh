/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  typescript: {
    ignoreBuildErrors: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    return config
  },
  eslint: {
    dirs: ['src']
  }
}
