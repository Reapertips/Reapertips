export interface IImage {
	url: string;
	alt: string;
}

export interface ISEO {
	brandName: string;
	metaDescription: string;
	ogImage: IImage;
}

export interface IPage {
	pageTitle: string;
	pageDescription: string;
	seo: ISEO;
}
