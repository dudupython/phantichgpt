/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'pbxt.replicate.delivery',
          'fngzth1bskhfpctb.public.blob.vercel-storage.com',
          'upcdn.io',
          'public.blob.vercel-storage.com'
        ],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'phantichgpt.vercel.app',
            port: '',
            pathname: '/',
          },
        ],
      },
}

module.exports = nextConfig
