'use strict';

module.exports = {
	root: true,
	extends: 'airbnb',
	parser: 'babel-eslint',
	env: { browser: true },
	rules: {
		indent: [2, 'tab'],
		camelcase: 0, // API uses snake_case
		'no-tabs': 0,
		'react/jsx-indent': 0,
		'arrow-parens': [2, 'as-needed'],
		'no-console': 0,
		'func-names': 0,
		'consistent-return': 0,
		'react/jsx-indent-props': 0,
		'react/jsx-props-no-spreading': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/no-danger': 0,
	},
	overrides: [
		{
			files: [
				'.eslintrc.js',
				'*.config.js',
			],
			env: {
				node: true,
				browser: false,
			},
			parserOptions: { sourceType: 'script' },
			rules: {
				strict: [2, 'global'],
			},
		},
	],
};
