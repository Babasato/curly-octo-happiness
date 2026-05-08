const path = require('path')

const nextConfig = {
  serverExternalPackages: ['resend'],
  turbopack: {
    root: path.join(__dirname)
  },
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react'],
  },
  async redirects() {
    return [
      { source: '/free-resources.html', destination: '/resources', permanent: true },
      { source: '/downloads/:path*', destination: '/resources', permanent: true },
    ];
  },
};

module.exports = nextConfig;