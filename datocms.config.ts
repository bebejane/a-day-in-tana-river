import { DatoCmsConfig, getUploadReferenceRoutes } from 'next-dato-utils/config';
import { MetadataRoute } from 'next';

export default {
	routes: {
		start: async (record, locale) => [`/`],
		upload: async ({ id }) => await getUploadReferenceRoutes(id),
	},
	sitemap: async () => {
		return [
			{
				url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
				lastModified: new Date().toISOString(),
				changeFrequency: 'daily',
				priority: 1,
			},
		];
	},
	manifest: async () => {
		return {
			name: 'A day in Tana River',
			short_name: 'A day in Tana River',
			description: '',
			start_url: '/',
			display: 'standalone',
			background_color: '#ffffff',
			theme_color: '#000000',
			icons: [
				{
					src: '/favicon.ico',
					sizes: 'any',
					type: 'image/x-icon',
				},
			],
		} satisfies MetadataRoute.Manifest;
	},
	robots: async () => {
		return {
			rules: {
				userAgent: '*',
				allow: '/',
			},
		};
	},
} satisfies DatoCmsConfig;
