import { useState, useEffect } from 'react';
import Head from 'next/head';

interface Props {
	pageTitle: string;
	pageDescription: string;
}

const SEO: React.FC<Props> = ({ pageTitle, pageDescription }) => {
	const [protocol, setProtocol] = useState<string>('');
	const [hostname, setHostname] = useState<string>('');
	const [port, setPort] = useState<string>('');

	useEffect(() => {
		setProtocol(window.location.protocol);
		setHostname(window.location.hostname);
		setPort(window.location.port);
	}, []);

	const brandName = 'Reapertips';
	const og_image = '';

	const finalPort = port && `: ${port}`;

	return (
		<Head>
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>{pageTitle ? `${pageTitle} | ${brandName}` : brandName}</title>
			<meta name="description" content={pageDescription} />
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={pageDescription} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${protocol}${hostname}${finalPort}`} />
			<meta property="og:image" content={og_image} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={pageDescription} />
		</Head>
	);
};

export default SEO;
