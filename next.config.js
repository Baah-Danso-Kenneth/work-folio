/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"export",
  'images':{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"work-folio-kenny.s3.eu-north-1.amazonaws.com"
      }
    ]
  }
  };
  
  module.exports = nextConfig;
  
  
