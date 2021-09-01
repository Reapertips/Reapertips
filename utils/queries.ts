import { gql, request } from 'graphql-request';

export const fetch = async (query: string) => {
	return request('https://api-eu-central-1.graphcms.com/v2/cksvw8od10l0c01yxdff75601/master', query);
};

export const getHomePage = gql`
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
				externalLink
				link
				color
				mode
			}
		}
	}
`;

export const getDownloadsPage = gql`
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
`;

export const getSubmitPage = gql`
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
`;
