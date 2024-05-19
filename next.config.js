/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
  readingTime: true
})
 
module.exports = withNextra({
  reactStrictMode: true,
  cleanDistDir: true
})
 