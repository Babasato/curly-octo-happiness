const path = require('path')

const nextConfig = {
  serverExternalPackages: ['resend'],
  turbopack: {
    root: path.join(__dirname)  // 👈 THIS tells Turbopack your real root
  },
  async redirects() {
    return [
      { source: '/free-resources.html', destination: '/resources', permanent: true },
      // { source: '/free-resources', destination: '/resources', permanent: true }, // 👈 KEEP THIS COMMENTED
      { source: '/downloads/:path*', destination: '/resources', permanent: true },
    ];
  },
};

module.exports = nextConfig;