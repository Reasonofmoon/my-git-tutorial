/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/my-git-tutorial/',
  basePath: '/my-git-tutorial',
}

module.exports = nextConfig