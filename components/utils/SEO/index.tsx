import { useState, useEffect } from 'react';
import Head from 'next/head';

import { IPage } from '@utils/types';

const SEO = ({ pageTitle, pageDescription, seo }: IPage) => {
	const [protocol, setProtocol] = useState<string>('');
	const [hostname, setHostname] = useState<string>('');
	const [port, setPort] = useState<string>('');

	useEffect(() => {
		setProtocol(window.location.protocol);
		setHostname(window.location.hostname);
		setPort(window.location.port);
	}, []);

	const { brandName, ogImage, metaDescription } = seo;

	const title = pageTitle ? `${pageTitle} | ${brandName}` : brandName;
	const finalPort = port && `: ${port}`;

	return (
		<Head>
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>{title}</title>
			<meta
				name="description"
				content={pageDescription === null || pageDescription === '' ? metaDescription : pageDescription}
			/>
			<meta property="og:title" content={title} />
			<meta property="og:description" content={pageDescription} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${protocol}${hostname}${finalPort}`} />
			<meta property="og:image" content={ogImage.url} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={pageDescription} />
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/package/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/package/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/package/favicon-16x16.png" />
			<link rel="manifest" href="/favicon/package/site.webmanifest" />
			<link rel="mask-icon" href="/favicon/package/safari-pinned-tab.svg" color="#526ad1" />
			<meta name="msapplication-TileColor" content="#526ad1" />
			<meta name="theme-color" content="#526ad1"></meta>
		</Head>
	);
};

export default SEO;
