/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/dev-ty',       // repo name, no trailing slash
  assetPrefix: '/dev-ty/',   // with trailing slash is fine here
  images: {
    unoptimized: true,       // required for next/image with `next export`
  },
}

module.exports = nextConfig;
