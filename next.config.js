/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
    basePath: '/dev-ty',     // repo name, no trailing slash
    assetPrefix: '/dev-ty/', // ensures assets load from repo path
  images: {
    unoptimized: true,
  },
}



module.exports = nextConfig
