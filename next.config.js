/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		minimumCacheTTL: 2678400,
        remotePatterns: [
            {
                hostname: "v5.airtableusercontent.com",
            }
        ]
    }
}

module.exports = nextConfig
