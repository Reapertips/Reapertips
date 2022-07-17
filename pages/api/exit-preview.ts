import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	// Exit the current user from "Preview Mode". This function accepts no args.
	res.clearPreviewData();

	const previewData = req.previewData as { slug: string };

	const dev = process.env.NODE_ENV === 'development';
	const BASE_URL = dev ? 'http://localhost:3000' : 'https://reapertips.com';

	res.redirect(`${BASE_URL}${previewData.slug}`);
}
