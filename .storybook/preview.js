import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import * as NextImage from 'next/image';
import { theme } from '@lib/themes';
import '../styles/globals.css';

const themes = [theme];
addDecorator(withThemesProvider(themes), ThemeProvider);

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props) => <OriginalNextImage {...props} unoptimized />
});

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};
