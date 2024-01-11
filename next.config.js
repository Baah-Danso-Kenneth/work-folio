/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    domains: ['work-folio-kenny.s3.eu-north-1.amazonaws.com'],
  },
};

module.exports = nextConfig;

