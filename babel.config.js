'use strict';

module.exports = function babelConfig(api) {
	const isProduction = process.env.NODE_ENV === 'production';

	api.cache(!isProduction);

	return {
		sourceMaps: isProduction ? true : 'inline',
		presets: [
			['@babel/preset-env', {
				corejs: '3.6.5',
				useBuiltIns: 'usage',
			}],
			'@babel/preset-react',
		],
		plugins: [
			'@babel/plugin-proposal-optional-chaining',
			['module-resolver', {
				root: './',
				alias: {
					assets: './src/assets',
					'~': './src',
				},
			}],
			['babel-plugin-styled-components'],
		],
	};
};
