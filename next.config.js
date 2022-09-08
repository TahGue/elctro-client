/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'localhost', 'loremflickr.com', 'shop.multi-services.se', 'shop.multi-services.dk'],
  },
};

module.exports = nextConfig;
