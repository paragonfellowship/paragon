/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "v5.airtableusercontent.com",
            }
        ]
    }
}

module.exports = nextConfig
