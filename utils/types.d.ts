export interface IProfile {
	username: string;
	photo: {
		url: string;
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

export interface IButton {
	id: string;
	title: string;
	subtitle: string;
	externalLink: string;
	link: string;
	color: 'red' | 'blue';
	type: 'primary' | 'secondary';
}

interface IPost {
	id: string;
	title: string;
	downloadLink: string;
	thumbnail: {
		url: string;
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
