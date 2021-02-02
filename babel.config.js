'use strict';

module.exports = function babelConfig(api) {
	api.cache(process.env.NODE_ENV !== 'production');

	return {
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
