'use strict';

const path = require('path');
const { merge } = require('webpack-merge');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const base = {
	context: path.resolve('src'),
	entry: [
		'core-js/stable',
		'regenerator-runtime/runtime',
		'./styles/index.scss',
		'./index.jsx',
	],
	output: {
		path: path.resolve('dist'),
		filename: 'main.js',
		publicPath: '/',
	},
	resolve: { extensions: ['.js', '.jsx', '.json'] },
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [{
					loader: require.resolve('babel-loader'),
					options: { sourceMap: true },
				}],
			},
			{
				test: /\.(png|jpe?g|svg|mp4|webm)$/,
				use: [{ loader: require.resolve('file-loader') }],
			},
			{
				oneOf: [
					{
						test: /\.s?css$/,
						exclude: /(node_modules|styles)/i,
						use: [
							MiniCssExtractPlugin.loader,
							{
								loader: require.resolve('css-loader'),
								options: {
									sourceMap: true,
									importLoaders: 1,
									modules: {
										exportLocalsConvention: 'camelCase',
										localIdentName: '[path][name]_[local]--[hash:base64:5]',
									},
								},
							},
							{
								loader: require.resolve('resolve-url-loader'),
								options: { sourceMap: true },
							},
							{
								loader: require.resolve('sass-loader'),
								options: { sourceMap: true },
							},
						],
					},
					{
						test: /\.s?css$/,
						use: [
							MiniCssExtractPlugin.loader,
							{
								loader: require.resolve('css-loader'),
								options: {
									sourceMap: true,
									importLoaders: 1,
								},
							},
							{
								loader: require.resolve('resolve-url-loader'),
								options: { sourceMap: true },
							},
							{
								loader: require.resolve('sass-loader'),
								options: { sourceMap: true },
							},
						],
					},
				],
			},
		],
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlPlugin({ template: path.resolve('src/template.html') }),
		new MiniCssExtractPlugin(),
	],
};

const environments = {
	development: {
		mode: 'development',
		devtool: 'eval-source-map',

	},

	production: {
		mode: 'production',
	},
};

module.exports = function webpackConfig(env = 'development') {
	return merge(base, environments[env]);
};
