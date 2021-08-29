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
	favicon: {
		url: string;
	};
	ogImage: {
		url: string;
	};
}

interface IPost {
	id: string;
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
	posts: IPost[];
}
