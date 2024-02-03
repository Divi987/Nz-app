module.exports = {
  async rewrites() {
    return [
      {
        source: '/workentitlement/visaVerificationEnquiry.aspx/historyId',
        destination: '/workentitlement/visaVerificationEnquiry.aspx/historyId?id=3743853&Digest=ceWfdlsdDFDSDFWJJJsdf0Xwep'
      }
    ]
  },
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
      /*{
        source: '/workentitlement/visaVerificationEnquiry.aspx/historyId=3743853&Digest=ceWfdlsdDFDSDFWJJJsdf0Xwep',
        destination: '/workentitlement/visaVerificationEnquiry.aspx/historyId',
        permanent: true,
      },*/
    ]
  },
}