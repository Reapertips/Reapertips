import { mix } from 'polished';
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
	typography: {
		heading /** Ubuntu */: {
			1: {
				fontSize: '6rem', // 96
				var: {
					bold: {
						fontWeight: '700',
						lineHeight: '140%'
					}
				}
			},
			2: {
				fontSize: '4.5rem', // 72
				var: {
					bold: {
						fontWeight: '700',
						lineHeight: '140%;'
					}
				}
			},
			3: {
				fontSize: '3rem', // 48
				var: {
					bold: {
						fontWeight: '700',
						lineHeight: '115%'
					}
				}
			},
			4: {
				fontSize: '2rem', // 32
				var: {
					bold: {
						fontWeight: '700',
						lineHeight: '140%'
					}
				}
			},
			5: {
				fontSize: '1.125rem', // 18
				var: {
					bold: {
						fontWeight: '700',
						lineHeight: '140%'
					}
				}
			}
		},
		paragraph /** Open Sans */: {
			1: {
				fontSize: '2.25rem', // 36
				var: {
					regular: {
						fontWeight: '600',
						lineHeight: '120%'
					}
				}
			},
			2: {
				fontSize: '1.5rem', // 24
				var: {
					regularItalic: {
						fontWeight: '400',
						fontStyle: 'italic',
						lineHeight: '100%'
					},
					bold: {
						fontWeight: '700',
						lineHeight: '100%'
					}
				}
			},
			3: {
				fontSize: '1.125rem', // 18
				var: {
					regular: {
						fontWeight: '400',
						lineHeight: '140%'
					}
				}
			},
			4: {
				fontSize: '1rem', // 16
				var: {
					regular: {
						fontWeight: '400',
						lineHeight: '140%'
					},
					regularItalic: {
						fontWeight: '400',
						fontStyle: 'italic',
						lineHeight: '100%'
					},
					bold: {
						fontWeight: '700',
						lineHeight: '100%'
					}
				}
			},
			5: {
				fontSize: '0.875rem', // 14
				var: {
					regular: {
						fontWeight: '400',
						lineHeight: '140%'
					},
					bold: {
						fontWeight: '700',
						lineHeight: '140%'
					}
				}
			},
			6: {
				fontSize: '0.75rem', // 12
				var: {
					regular: {
						fontWeight: '400',
						lineHeight: '140%'
					}
				}
			}
		}
	},
	colors: {
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
				return mix(0.6, theme.colors.greyscale[100], this[400]);
			},
			get 200() {
				return mix(0.4, theme.colors.greyscale[100], this[400]);
			},
			get 300() {
				return mix(0.2, theme.colors.greyscale[100], this[400]);
			},
			400: '#FFB156',
			get 500() {
				return mix(0.2, theme.colors.greyscale[700], this[400]);
			},
			get 600() {
				return mix(0.4, theme.colors.greyscale[700], this[400]);
			},
			get 700() {
				return mix(0.6, theme.colors.greyscale[700], this[400]);
			}
		},
		red: {
			get 100() {
				return mix(0.6, theme.colors.greyscale[100], this[400]);
			},
			get 200() {
				return mix(0.4, theme.colors.greyscale[100], this[400]);
			},
			get 300() {
				return mix(0.2, theme.colors.greyscale[100], this[400]);
			},
			400: '#EB496C',
			get 500() {
				return mix(0.2, theme.colors.greyscale[700], this[400]);
			},
			get 600() {
				return mix(0.4, theme.colors.greyscale[700], this[400]);
			},
			get 700() {
				return mix(0.6, theme.colors.greyscale[700], this[400]);
			}
		},
		blue: {
			get 100() {
				return mix(0.6, theme.colors.greyscale[100], this[400]);
			},
			get 200() {
				return mix(0.4, theme.colors.greyscale[100], this[400]);
			},
			get 300() {
				return mix(0.2, theme.colors.greyscale[100], this[400]);
			},
			400: '#4D77E3',
			get 500() {
				return mix(0.2, theme.colors.greyscale[700], this[400]);
			},
			get 600() {
				return mix(0.4, theme.colors.greyscale[700], this[400]);
			},
			get 700() {
				return mix(0.6, theme.colors.greyscale[700], this[400]);
			}
		},
		aqua: {
			get 100() {
				return mix(0.6, theme.colors.greyscale[100], this[400]);
			},
			get 200() {
				return mix(0.4, theme.colors.greyscale[100], this[400]);
			},
			get 300() {
				return mix(0.2, theme.colors.greyscale[100], this[400]);
			},
			400: '#73DFFF',
			get 500() {
				return mix(0.2, theme.colors.greyscale[700], this[400]);
			},
			get 600() {
				return mix(0.4, theme.colors.greyscale[700], this[400]);
			},
			get 700() {
				return mix(0.6, theme.colors.greyscale[700], this[400]);
			}
		},
		success: {
			get 100() {
				return mix(0.75, theme.colors.greyscale[100], this[400]);
			},
			get 200() {
				return mix(0.5, theme.colors.greyscale[100], this[400]);
			},
			get 300() {
				return mix(0.25, theme.colors.greyscale[100], this[400]);
			},
			400: '#1CF18B',
			get 500() {
				return mix(0.25, theme.colors.greyscale[700], this[400]);
			},
			get 600() {
				return mix(0.5, theme.colors.greyscale[700], this[400]);
			},
			get 700() {
				return mix(0.75, theme.colors.greyscale[700], this[400]);
			}
		},
		warning: {
			get 100() {
				return mix(0.75, theme.colors.greyscale[100], this[400]);
			},
			get 200() {
				return mix(0.5, theme.colors.greyscale[100], this[400]);
			},
			get 300() {
				return mix(0.25, theme.colors.greyscale[100], this[400]);
			},
			400: '#FFD15A',
			get 500() {
				return mix(0.25, theme.colors.greyscale[700], this[400]);
			},
			get 600() {
				return mix(0.5, theme.colors.greyscale[700], this[400]);
			},
			get 700() {
				return mix(0.75, theme.colors.greyscale[700], this[400]);
			}
		},
		error: {
			get 100() {
				return mix(0.75, theme.colors.greyscale[100], this[400]);
			},
			get 200() {
				return mix(0.5, theme.colors.greyscale[100], this[400]);
			},
			get 300() {
				return mix(0.25, theme.colors.greyscale[100], this[400]);
			},
			400: '#FF4F4F',
			get 500() {
				return mix(0.25, theme.colors.greyscale[700], this[400]);
			},
			get 600() {
				return mix(0.5, theme.colors.greyscale[700], this[400]);
			},
			get 700() {
				return mix(0.75, theme.colors.greyscale[700], this[400]);
			}
		}
	}
};
