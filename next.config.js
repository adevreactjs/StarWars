/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    domains: ['vignette.wikia.nocookie.net', 'download.logo.wine', 'static-mh.content.disney.io'],
  },
};

module.exports = nextConfig;
