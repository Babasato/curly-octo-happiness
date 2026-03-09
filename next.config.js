const nextConfig = {
  serverExternalPackages: ['resend'],
  turbopack: { root: __dirname },
  async redirects() {
    return [
      // Existing redirects
      { source: '/free-resources.html', destination: '/resources', permanent: true },
      { source: '/free-resources', destination: '/resources', permanent: true },
      { source: '/downloads/:path*', destination: '/resources', permanent: true },

      // Ezoic ads.txt redirect
      {
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/19390/homeschoolmath.site',
        permanent: false,
      },
    ];
  },
};
module.exports = nextConfig;
