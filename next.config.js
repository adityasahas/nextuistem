/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/elect",
        destination: "https://forms.gle/D5vZ6XPFfsngCA5G8",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
