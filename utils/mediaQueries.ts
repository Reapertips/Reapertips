export const breakpoints = {
	xs: 576,
	sm: 768,
	md: 992,
	lg: 1200,
	xl: 1440,
	xxl: 1800
};

export const sizes = {
	xs: `${breakpoints.xs}px`,
	sm: `${breakpoints.sm}px`,
	md: `${breakpoints.md}px`,
	lg: `${breakpoints.lg}px`,
	xl: `${breakpoints.xl}px`,
	xxl: `${breakpoints.xxl}px`
};

export const devices = {
	xs: `(min-width: ${sizes.xs})`,
	sm: `(min-width: ${sizes.sm})`,
	md: `(min-width: ${sizes.md})`,
	lg: `(min-width: ${sizes.lg})`,
	xl: `(min-width: ${sizes.xl})`,
	xxl: `(min-width: ${sizes.xxl})`
};
