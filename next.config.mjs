/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true, // Enable compression by default
    images: {
        formats: ['image/webp', 'image/avif'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'example.com',
            port: '',
            pathname: '/images/**',
          },
        ],
      },
  };
  
  export default nextConfig;