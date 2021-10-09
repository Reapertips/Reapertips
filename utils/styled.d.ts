import 'styled-components';

interface IPalette {
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
}

type Heading = 'bold';
type Paragraph = 'regular' | 'regularItalic' | 'bold';

interface ITextStyle {
	fontWeight: string;
	fontStyle?: string;
	lineHeight: string;
	letterSpacing?: string;
}

type FontVariants<T> = {
	[name: keyof T]: ITextStyle;
};

interface ITypeface<T> {
	[id: number]: {
		fontSize: string;
		var: FontVariants;
	};
}

declare module 'styled-components' {
	export interface DefaultTheme {
		typography: {
			heading: ITypeface<Heading>;
			paragraph: ITypeface<Paragraph>;
		};
		colors: {
			greyscale: IPalette;
			greyedBlue: IPalette;
			orange: IPalette;
			red: IPalette;
			blue: IPalette;
			aqua: IPalette;
			success: IPalette;
			warning: IPalette;
			error: IPalette;
		};
	}
}
