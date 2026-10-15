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
  async rewrites() {
    return [
      // Exhibition demo of the dashboard organisations get (public/org-demo.html, fictional data)
      { source: "/org-demo", destination: "/org-demo.html" },
      // Demo account prepared for a presentation to the Zimbabwe Republic Police (public/demo/zrp.html, fictional data)
      { source: "/demo/zrp", destination: "/demo/zrp.html" },
    ]
  },
}

export default nextConfig
