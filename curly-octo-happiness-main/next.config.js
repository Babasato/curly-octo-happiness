const nextConfig = {
  serverExternalPackages: ['resend'],
  turbopack: { root: __dirname },
  async redirects() {
    return [
      // Existing redirects
      { source: '/free-resources.html', destination: '/resources', permanent: true },
      { source: '/free-resources', destination: '/resources', permanent: true },
      { source: '/downloads/:path*', destination: '/resources', permanent: true },

      
    ];
  },
};
module.exports = nextConfig;
