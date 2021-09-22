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

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		dark: {
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
