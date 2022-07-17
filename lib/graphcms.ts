import { IHomePage } from '../pages';

interface FetchOptions {
	variables?: { [key: string]: string };
	preview?: boolean;
}

export async function fetchAPI(query: string, { variables, preview }: FetchOptions = {}) {
	const res = await fetch(process.env.GRAPHCMS_PROJECT_API as string, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${preview ? process.env.GRAPHCMS_DEV_AUTH_TOKEN : process.env.GRAPHCMS_PROD_AUTH_TOKEN}`
		},
		body: JSON.stringify({
			query,
			variables
		})
	});
	const json = await res.json();

	if (json.errors) {
		console.error(json.errors);
		// throw new Error('Failed to fetch API');
	}

	return json.data;
}

export async function getHomePage(preview: boolean) {
	return fetchAPI(
		`
			query getHomePage {
				homePages {
					pageTitle
					pageDescription
					seo {
						brandName
						metaDescription
						ogImage {
							url
						}
					}
					profile {
						username
						photo {
							url
							alt
						}
					}
					buttons {
						id
						title
						icon {
							url
							alt
						}
						subtitle
						href
						color
						mode
					}
				}
			}
		`,
		{
			preview
		}
	);
}

export async function getDownloadsPage(preview: boolean) {
	return fetchAPI(
		`
			query getDownloadsPage {
				downloadPages {
					pageTitle
					pageDescription
					seo {
						brandName
						metaDescription
						ogImage {
							url
						}
					}
					popup {
						text {
							html
						}
						icon {
							url
							alt
						}
					}
					posts {
						id
						title
						downloadLink
						thumbnail {
							url
							alt
						}
					}
				}
			}
		`,
		{
			preview
		}
	);
}
export async function getSubmitPage(preview: boolean) {
	return fetchAPI(
		`
			query getSubmitPage {
				submitPages {
					pageTitle
					pageDescription
					seo {
						brandName
						metaDescription
						ogImage {
							url
						}
					}
					popup {
						text {
							html
						}
						icon {
							url
							alt
						}
					}
					tipLabel
					tipDescription
					tipPlaceholder
					usernameLabel
					usernamePlaceholder
					creditsLabel
					creditsOptions
					submitButton
				}
			}
		`,
		{
			preview
		}
	);
}
