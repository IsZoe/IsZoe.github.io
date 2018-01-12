const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin= require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

console.log(process.env.type)

module.exports = {
	devtool:'#cheap-module-eval-source-map',
	entry: {
		index: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				css: ['vue-style-loader',{loader:'css-loader'}],
				//postcss :['vue-style-loader',{loader:'css-loader'}],
				sass: [
						'vue-style-loader',
						{loader:'css-loader'},
						{loader:'sass-loader',options:{indentedSyntax: true}}
				],
				scss: ['vue-style-loader',{loader:'css-loader'},{loader:'sass-loader'}]
			}
		},{
			test: /\.(css|scss|sass)$/,
			//use:[]  loader:[]
			use: ['style-loader','css-loader','sass-loader','postcss-loader']
		},{
			test: /\.(js)$/,
			//use:[]  loader:[]
			loader: 'babel-loader',
			exclude: path.resolve(__dirname,'./node_modules')
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit:8192,
					//name: 'img/[name].[ext]?[hash]',
					//outputPath:'img/'
				}
			}]
		}, {
          // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
          test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
          use: {
          	loader: 'url-loader?limit=1024&name=[hash:8].[name].[ext]'
          }
		}]
	},
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		noInfo: true,
		host: '0.0.0.0',
		compress: true
	},
	plugins: [
		new webpack.ProvidePlugin({
			Vue: ['vue/dist/vue.esm.js', 'default'],
			VueRouter: ['vue-router', 'default']
		}),
        new CopyWebpackPlugin([{
        	from: __dirname + '/src/assets/copy',
        	to: './dist/'
        }]),
        new htmlWebpackPlugin({
        	minify: {
        		//removeAttributeQuotes: true //移除属性引号
        	},
        	hash: true,
        	template: './src/index.html'
        })
	]
}
