/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // The safety pages originally shipped under /uk/ — keep those URLs working
      {
        source: "/uk/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
