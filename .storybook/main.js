const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	stories: ['./**/*.stories.mdx', '../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	core: {
		builder: 'webpack5'
	},
	typescript: { reactDocgen: false },
	webpackFinal: async (config) => {
		// Allows importing sass or scss files
		config.module.rules.push({
			test: /\.scss|.sass$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../')
		});

		config.resolve.plugins = [
			new TsconfigPathsPlugin({
				configFile: path.resolve(__dirname, '../tsconfig.json')
			})
		];
		return config;
	}
};
