/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, _) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.join(__dirname, 'src/components'), // include components as the source directory
    }
    return config;
  }
}

module.exports = nextConfig
