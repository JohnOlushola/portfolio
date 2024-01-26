const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: './theme.tsx'
})
 
module.exports = withNextra({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  assetPrefix: isProd ? 'https://cdn.jtolushola.com' : undefined,
})
 