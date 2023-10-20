/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['pokeapi.co'], 
  },
  experimental: { esmExternals: true },
  nextConfig
}
