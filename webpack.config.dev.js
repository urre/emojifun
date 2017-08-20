const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'docs'),
		filename: '[name].bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('[name].css', {
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		}),
		new StyleLintPlugin({
			configFile: '.stylelintrc',
			context: 'src',
			files: '**/*.css',
			failOnError: false,
			quiet: false
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loaders: ['babel-loader']
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'!css-loader?sourceMap&importLoaders=1!postcss-loader'
				)
			},
			{
				test: /\.html$/,
				loader: 'raw-loader'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				exclude: /(node_modules)/,
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url',
				query: {
					limit: 100000,
					mimetype: 'application/font-woff',
					name: 'public/fonts/[hash].[ext]'
				}
			},
			{
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url',
				query: {
					limit: 100000,
					mimetype: 'application/font-woff',
					name: 'public/fonts/[hash].[ext]'
				}
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url',
				query: {
					limit: 100000,
					mimetype: 'application/octet-stream',
					name: 'public/fonts/[hash].[ext]'
				}
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file',
				query: {
					name: 'public/fonts/[hash].[ext]'
				}
			}
		]
	},
	devServer: {
		contentBase: './docs',
		hot: true,
		colors: true,
		inline: true
	}
}
