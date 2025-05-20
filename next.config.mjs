/** @type {import('next').NextConfig} */
import withVideos from 'next-videos';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default withVideos(nextConfig);
