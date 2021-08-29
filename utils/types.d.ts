export interface IButton {
	id?: string;
	title: string;
	subtitle?: string;
	externalLink?: boolean;
	link?: string;
	color: 'red' | 'blue';
	mode: 'primary' | 'secondary';
}

export interface IProfile {
	username: string;
	photo: {
		url: string;
		alt: string;
	};
}

export interface ISEO {
	brandName: string;
	metaDescription: string;
	ogImage: {
		url: string;
	};
}

interface IPost {
	id?: string;
	title: string;
	downloadLink: string;
	thumbnail: {
		url: string;
		alt: string;
	};
}

interface IPage {
	pageTitle: string;
	pageDescription: string;
	seo: ISEO;
}

export interface IHome extends IPage {
	profile: IProfile;
	buttons: IButton[];
}

export interface IDownloads extends IPage {
	topMessageText: string;
	topMessageIcon: {
		url: string;
		alt: string;
	};
	posts: IPost[];
}

export interface ISubmit extends IPage {
	topMessageText: string;
	topMessageIcon: {
		url: string;
		alt: string;
	};
	tipLabel: string;
	tipDescription: string;
	tipPlaceholder: string;
	usernameLabel: string;
	usernamePlaceholder: string;
	creditsLabel: string;
	creditsOptions: string[];
	submitButton: string;
}
