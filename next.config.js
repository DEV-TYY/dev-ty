/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'out',
  output: 'export',
  basePath: '/dev-ty/', // <-- your repo name
  assetPrefix: '/dev-ty/', // <-- ensures images and assets load correctly
    images: {
    unoptimized: true,
  },
}



