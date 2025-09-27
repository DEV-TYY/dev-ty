/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/dev-ty',     // repo name, no trailing slash
    assetPrefix: '/dev-ty/', // ensures assets load from repo path
    images: {
        unoptimized: true,     // required for next/image with static export
    },
}



module.exports = nextConfig
