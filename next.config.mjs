/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['via.placeholder.com', 'images.pexels.com'], // Trusted domains
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com', // Example for images from Unsplash
        }
      ],
    },
  };
  
  export default nextConfig;
  