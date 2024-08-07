/** @type {import('next').NextConfig} */
import withVideos from 'next-videos';

const nextConfig = {
  /* config options here */
  output: 'export', // Enable static export
};

export default {
  ...nextConfig,
  ...withVideos(),
};
