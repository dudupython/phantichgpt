/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'pbxt.replicate.delivery',
          'fngzth1bskhfpctb.public.blob.vercel-storage.com',
        ],
        // remotePatterns: [
        //   {
        //     protocol: 'https',
        //     hostname: 'assets.example.com',
        //     port: '',
        //     pathname: '/account123/**',
        //   },
        // ],
      },
}

module.exports = nextConfig
