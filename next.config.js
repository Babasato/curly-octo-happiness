/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['resend'],
  },
  async redirects() {
    return [
      {
        // REDIRECT WWW TO NON-WWW
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.homeschoolmath.site',
          },
        ],
        destination: 'https://homeschoolmath.site/:path*',
        permanent: true,
      },
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
        // This catches all the old PDF links in the /downloads/ folder
        source: '/downloads/:path*',
        destination: '/resources',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
