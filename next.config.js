/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/library',
				destination: '/parents-and-educators',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
