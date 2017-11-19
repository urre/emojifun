const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')
const postcssUrl = require('postcss-url')

module.exports = {
	devtool: 'source-map',
	entry: ['./src/index'],
	output: {
		path: path.join(__dirname, 'docs'),
		filename: '[name].[chunkhash].js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new ExtractTextPlugin('[name].[contenthash].css', {
			allChunks: true
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
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
			}
		]
	}
}
