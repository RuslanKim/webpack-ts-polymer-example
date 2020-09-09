const ENV = 'development'
const config = require('./app.config')(false);
const baseConfig = require('./base-admin.config');
const { resolve, join } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');


module.exports = merge(baseConfig(config), {
	mode: ENV,

	output: {
		filename: '[name].js',
		chunkFilename: 'components/[id].js',
		path: resolve(__dirname, '../..', config.outputAdminDir),
		publicPath: 'admin/build/',
	},

	devtool: 'inline-source-map',

	module: {
		rules: [
			{ 
				test: /\.html$/, 
				use: {
					loader: 'html-loader', 
					options: {  
						// exportAsEs6Default: true, 
					},
				}, 
			},
			{ 
				test: /\.ts$/, 
				use: 'awesome-typescript-loader',
				exclude: "/node_modules/",
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(config.outputAdminDir, {}),

		// copy custom static assets
		new CopyWebpackPlugin([
			{
				from: resolve(__dirname, '../static/'),
				to: '.',
				ignore: ['.*']
			},

			// Custom Elements ES5 adapter
			{
				from: resolve(__dirname, '../../node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'),
				to: './webcomponentsjs',
				flatten: true,
			},

			// WebComponents Polyfills
			{
				from: resolve(__dirname, '../../node_modules/@webcomponents/webcomponentsjs/bundles/**/*'),
				to: './webcomponentsjs/bundles',
				flatten: true,
			},
		]),
		new CheckerPlugin(),
		// new HardSourceWebpackPlugin()
	],

});
