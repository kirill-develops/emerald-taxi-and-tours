/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media-cdn.tripadvisor.com'
      },
      {
        protocol: 'https',
        hostname: 'www.tripadvisor.com'
      }
    ]
  }
}

module.exports = nextConfig
