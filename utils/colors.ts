import { mix } from 'polished';

// Hues
// export const blue = '#4D77E3';
// export const red = '#EB496C';

// Shades
export const white = '#f5f5f5';
export const black = '#000000';

// Background
export const background__dark = '#101526';
export const background__grey = '#303442';

// Text
export const text__heading = '#FBFAFF';
export const text__body = '#DEE5F4';
export const text__accent__blue = '#73DFFF';
export const text__accent__orange = '#FFB156';
export const text__accent__red = '#FF577B';

// Button
// export const button__red = red;
// export const button__blue = blue;

// Gradient
export const gradient__accent__start = '#73DFFF';
export const gradient__accent__stop = '#6FB1FF';
export const gradient__dark__start = '#303442';
export const gradient__dark__stop = '#101526';

/**
 * NEW COLORS
 */

export const greyscale = {
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
};

export const greyedBlue = {
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
};

export const orange = {
	get 100() {
		return mix(0.6, greyscale[100], this[400]);
	},
	get 200() {
		return mix(0.4, greyscale[100], this[400]);
	},
	get 300() {
		return mix(0.2, greyscale[100], this[400]);
	},
	400: '#FFB156',
	get 500() {
		return mix(0.2, greyscale[700], this[400]);
	},
	get 600() {
		return mix(0.4, greyscale[700], this[400]);
	},
	get 700() {
		return mix(0.6, greyscale[700], this[400]);
	}
};

export const red = {
	get 100() {
		return mix(0.6, greyscale[100], this[400]);
	},
	get 200() {
		return mix(0.4, greyscale[100], this[400]);
	},
	get 300() {
		return mix(0.2, greyscale[100], this[400]);
	},
	400: '#EB496C',
	get 500() {
		return mix(0.2, greyscale[700], this[400]);
	},
	get 600() {
		return mix(0.4, greyscale[700], this[400]);
	},
	get 700() {
		return mix(0.6, greyscale[700], this[400]);
	}
};

export const blue = {
	get 100() {
		return mix(0.6, greyscale[100], this[400]);
	},
	get 200() {
		return mix(0.4, greyscale[100], this[400]);
	},
	get 300() {
		return mix(0.2, greyscale[100], this[400]);
	},
	400: '#4D77E3',
	get 500() {
		return mix(0.2, greyscale[700], this[400]);
	},
	get 600() {
		return mix(0.4, greyscale[700], this[400]);
	},
	get 700() {
		return mix(0.6, greyscale[700], this[400]);
	}
};

export const aqua = {
	get 100() {
		return mix(0.6, greyscale[100], this[400]);
	},
	get 200() {
		return mix(0.4, greyscale[100], this[400]);
	},
	get 300() {
		return mix(0.2, greyscale[100], this[400]);
	},
	400: '#73DFFF',
	get 500() {
		return mix(0.2, greyscale[700], this[400]);
	},
	get 600() {
		return mix(0.4, greyscale[700], this[400]);
	},
	get 700() {
		return mix(0.6, greyscale[700], this[400]);
	}
};

export const success = {
	get 100() {
		return mix(0.75, greyscale[100], this[400]);
	},
	get 200() {
		return mix(0.5, greyscale[100], this[400]);
	},
	get 300() {
		return mix(0.25, greyscale[100], this[400]);
	},
	400: '#1CF18B',
	get 500() {
		return mix(0.25, greyscale[700], this[400]);
	},
	get 600() {
		return mix(0.5, greyscale[700], this[400]);
	},
	get 700() {
		return mix(0.75, greyscale[700], this[400]);
	}
};

export const warning = {
	get 100() {
		return mix(0.75, greyscale[100], this[400]);
	},
	get 200() {
		return mix(0.5, greyscale[100], this[400]);
	},
	get 300() {
		return mix(0.25, greyscale[100], this[400]);
	},
	400: '#FFD15A',
	get 500() {
		return mix(0.25, greyscale[700], this[400]);
	},
	get 600() {
		return mix(0.5, greyscale[700], this[400]);
	},
	get 700() {
		return mix(0.75, greyscale[700], this[400]);
	}
};

export const error = {
	get 100() {
		return mix(0.75, greyscale[100], this[400]);
	},
	get 200() {
		return mix(0.5, greyscale[100], this[400]);
	},
	get 300() {
		return mix(0.25, greyscale[100], this[400]);
	},
	400: '#FF4F4F',
	get 500() {
		return mix(0.25, greyscale[700], this[400]);
	},
	get 600() {
		return mix(0.5, greyscale[700], this[400]);
	},
	get 700() {
		return mix(0.75, greyscale[700], this[400]);
	}
};
