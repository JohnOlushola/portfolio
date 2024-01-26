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
})
 