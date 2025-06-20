/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/interactiveslides",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
