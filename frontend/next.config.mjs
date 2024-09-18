/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable the default Image Optimization API for this demo.
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "https",
        hostname: "medusa-eats-frontend-demo.onrender.com",
      },
      {
        protocol: "https",
        hostname: "medusa-eats-frontend-blueprint.onrender.com",
      },
      {
        protocol: "https",
        hostname: "medusa-eats-frontend-demo-blueprint.onrender.com",
      },
      {
        protocol: "https",
        hostname: "medusa-eats-demo-blueprint.onrender.com",
      },
      {
        protocol: "https",
        hostname: "medusa-eats-demo.onrender.com",
      },
      {
        protocol: "https",
        hostname: "robohash.org",
      },
    ],
  },
};

export default nextConfig;
