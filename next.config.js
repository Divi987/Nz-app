module.exports = {
    async redirects() {
      return [
        // Basic redirect
        {
          source: '/workentitlement',
          destination: 'https://www.immigration.govt.nz/workentitlement',
          permanent: true,
        },
        {
            source: '/',
            destination: 'https://www.immigration.govt.nz/',
            permanent: true,
          },
      ]
    },
  }