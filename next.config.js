/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
