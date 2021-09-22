import { mix } from 'polished';
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
	dark: {
		greyscale: {
			100: '#FBFAFF',
			get 200() {
				return mix((1 / 6) * 5, this[100], this[700]);
			},
			get 300() {
				return mix((1 / 6) * 4, this[100], this[700]);
			},
			get 400() {
				return mix((1 / 6) * 3, this[100], this[700]);
			},
			get 500() {
				return mix((1 / 6) * 2, this[100], this[700]);
			},
			get 600() {
				return mix((1 / 6) * 1, this[100], this[700]);
			},
			700: '#101526'
		},
		greyedBlue: {
			100: '#DEE5F4',
			get 200() {
				return mix((1 / 6) * 5, this[100], this[700]);
			},
			get 300() {
				return mix((1 / 6) * 4, this[100], this[700]);
			},
			get 400() {
				return mix((1 / 6) * 3, this[100], this[700]);
			},
			get 500() {
				return mix((1 / 6) * 2, this[100], this[700]);
			},
			get 600() {
				return mix((1 / 6) * 1, this[100], this[700]);
			},
			700: '#20263C'
		},
		orange: {
			get 100() {
				return mix(0.6, theme.dark.greyscale[100], this[400]);
			},
			get 200() {
				return mix(0.4, theme.dark.greyscale[100], this[400]);
			},
			get 300() {
				return mix(0.2, theme.dark.greyscale[100], this[400]);
			},
			400: '#FFB156',
			get 500() {
				return mix(0.2, theme.dark.greyscale[700], this[400]);
			},
			get 600() {
				return mix(0.4, theme.dark.greyscale[700], this[400]);
			},
			get 700() {
				return mix(0.6, theme.dark.greyscale[700], this[400]);
			}
		},
		red: {
			get 100() {
				return mix(0.6, theme.dark.greyscale[100], this[400]);
			},
			get 200() {
				return mix(0.4, theme.dark.greyscale[100], this[400]);
			},
			get 300() {
				return mix(0.2, theme.dark.greyscale[100], this[400]);
			},
			400: '#EB496C',
			get 500() {
				return mix(0.2, theme.dark.greyscale[700], this[400]);
			},
			get 600() {
				return mix(0.4, theme.dark.greyscale[700], this[400]);
			},
			get 700() {
				return mix(0.6, theme.dark.greyscale[700], this[400]);
			}
		},
		blue: {
			get 100() {
				return mix(0.6, theme.dark.greyscale[100], this[400]);
			},
			get 200() {
				return mix(0.4, theme.dark.greyscale[100], this[400]);
			},
			get 300() {
				return mix(0.2, theme.dark.greyscale[100], this[400]);
			},
			400: '#4D77E3',
			get 500() {
				return mix(0.2, theme.dark.greyscale[700], this[400]);
			},
			get 600() {
				return mix(0.4, theme.dark.greyscale[700], this[400]);
			},
			get 700() {
				return mix(0.6, theme.dark.greyscale[700], this[400]);
			}
		},
		aqua: {
			get 100() {
				return mix(0.6, theme.dark.greyscale[100], this[400]);
			},
			get 200() {
				return mix(0.4, theme.dark.greyscale[100], this[400]);
			},
			get 300() {
				return mix(0.2, theme.dark.greyscale[100], this[400]);
			},
			400: '#73DFFF',
			get 500() {
				return mix(0.2, theme.dark.greyscale[700], this[400]);
			},
			get 600() {
				return mix(0.4, theme.dark.greyscale[700], this[400]);
			},
			get 700() {
				return mix(0.6, theme.dark.greyscale[700], this[400]);
			}
		},
		success: {
			get 100() {
				return mix(0.75, theme.dark.greyscale[100], this[400]);
			},
			get 200() {
				return mix(0.5, theme.dark.greyscale[100], this[400]);
			},
			get 300() {
				return mix(0.25, theme.dark.greyscale[100], this[400]);
			},
			400: '#1CF18B',
			get 500() {
				return mix(0.25, theme.dark.greyscale[700], this[400]);
			},
			get 600() {
				return mix(0.5, theme.dark.greyscale[700], this[400]);
			},
			get 700() {
				return mix(0.75, theme.dark.greyscale[700], this[400]);
			}
		},
		warning: {
			get 100() {
				return mix(0.75, theme.dark.greyscale[100], this[400]);
			},
			get 200() {
				return mix(0.5, theme.dark.greyscale[100], this[400]);
			},
			get 300() {
				return mix(0.25, theme.dark.greyscale[100], this[400]);
			},
			400: '#FFD15A',
			get 500() {
				return mix(0.25, theme.dark.greyscale[700], this[400]);
			},
			get 600() {
				return mix(0.5, theme.dark.greyscale[700], this[400]);
			},
			get 700() {
				return mix(0.75, theme.dark.greyscale[700], this[400]);
			}
		},
		error: {
			get 100() {
				return mix(0.75, theme.dark.greyscale[100], this[400]);
			},
			get 200() {
				return mix(0.5, theme.dark.greyscale[100], this[400]);
			},
			get 300() {
				return mix(0.25, theme.dark.greyscale[100], this[400]);
			},
			400: '#FF4F4F',
			get 500() {
				return mix(0.25, theme.dark.greyscale[700], this[400]);
			},
			get 600() {
				return mix(0.5, theme.dark.greyscale[700], this[400]);
			},
			get 700() {
				return mix(0.75, theme.dark.greyscale[700], this[400]);
			}
		}
	}
};
