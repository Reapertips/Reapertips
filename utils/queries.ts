import { gql } from 'graphql-request';

export const cms = 'https://api-eu-central-1.graphcms.com/v2/cksvw8od10l0c01yxdff75601/master';

export const getHomePage = gql`
	query getHomePage {
		homepages {
			pageTitle
			pageDescription
			seo {
				brandName
				metaDescription
				favicon {
					url
				}
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
				subtitle
				externalLink
				link
				color
				type
			}
		}
	}
`;

export const getDownloadsPage = gql`
	query getDownloadsPage {
		downloads {
			pageTitle
			pageDescription
			seo {
				brandName
				metaDescription
				favicon {
					url
				}
				ogImage {
					url
				}
			}
			topMessageText
			topMessageIcon {
				url
				alt
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
		submits {
			pageTitle
			pageDescription
			seo {
				brandName
				metaDescription
				favicon {
					url
				}
				ogImage {
					url
				}
			}
			topMessageText
			topMessageIcon {
				url
				alt
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
