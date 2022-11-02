/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
//   pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/test/jobs/',
        permanent: true
      }
    ]
  },
  eslint: {
    dirs: ['pages', 'helpers', 'api', 'types']
  }
}

module.exports = nextConfig
