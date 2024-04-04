/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",

    images: {
      unoptimized: true ,
        remotePatterns: [
          {
            protocol: "https",
            hostname: "flowbite.com",
          },
        ],
      },
      eslint: {
        ignoreDuringBuilds: true,
      },
    };


export default nextConfig;
