import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	transpilePackages: ['@sotto-web/shared'],
	typescript: { ignoreBuildErrors: true },
	eslint: { ignoreDuringBuilds: true },
};

export default withVanillaExtract(nextConfig);
