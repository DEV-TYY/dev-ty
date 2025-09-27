/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/dev-ty', // <-- your repo name
  assetPrefix: '/dev-ty/', // <-- ensures images and assets load correctly

}


module.exports = nextConfig

  distDir: 'out',
  // basePath: '/suon-ty-portfolio-next-js',
  // assetPrefix: '/suon-ty-portfolio-next-js/',
  images: {
    unoptimized: true,
  },
