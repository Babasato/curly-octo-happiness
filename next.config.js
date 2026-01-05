/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['resend'],
  },
  async redirects() {
    return [
      // Redirect www to non-www (301 permanent redirect)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.homeschoolmath.site' }],
        destination: 'https://homeschoolmath.site/:path*',
        permanent: true,
      },
      // Your existing redirects
      {
        source: '/free-resources.html',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/free-resources',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/downloads/:path*',
        destination: '/resources',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
