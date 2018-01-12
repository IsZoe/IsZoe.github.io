const path = require('path');
//const glob = require('glob');
const webpack = require('webpack');
const htmlWebpackPlugin= require('html-webpack-plugin');
const ExtractTextPlugin= require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
	devtool: '#source-map',
	entry: {
		index: './src/index.js',
		vendor: ['vue', 'vue-router']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		//publicPath: "/find-app/dist/",
		filename: '[name].js'
	},
	module: {
		rules: [{
			test: /\.vue$/,
			//use:[]  loader:[]
			loader: 'vue-loader',
			options: {
				loaders: {
					css: ExtractTextPlugin.extract({
					        use: ['css-loader'],
					        fallback: 'vue-style-loader'
				    }),
				    postcss: ExtractTextPlugin.extract({
					        use: ['css-loader'],
					        fallback: 'vue-style-loader'
				    }),
	                sass: ExtractTextPlugin.extract({
	                        use: ['css-loader','sass-loader'],
	                        fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
	                })
				}
			}
		},{
			test: /\.(js)$/,
			//use:[]  loader:[]
			loader: 'babel-loader',
			exclude: path.resolve(__dirname,'./node_modules')
		},{
			test: /\.(css|sass|scss)$/,
			//use:[]  loader:[]
			use: ExtractTextPlugin.extract({
				use: ['css-loader','sass-loader','postcss-loader'],
				fallback: 'style-loader'
			})
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit:8192,
					name: 'img/[name].[ext]?[hash]'
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
	plugins: [
        new webpack.ProvidePlugin({
			Vue: ['vue/dist/vue.esm.js', 'default'],
			VueRouter: ['vue-router', 'default']
		}),
		new CleanWebpackPlugin(['dist'], {
            root: path.resolve('./'),
            verbose: true,
            dry: false
        }),
		new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true
            }
        }),
        new htmlWebpackPlugin({
        	minify: {
        		removeAttributeQuotes: true //移除属性引号
        	},
        	hash: true,
        	template: './src/index.html'
        }),
        new ExtractTextPlugin('style.[contenthash:8].css'),
        new CopyWebpackPlugin([{
        	from: __dirname + '/src/assets/copy',
        	to: __dirname + '/dist/'
        }]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[chunkhash:8].js'
        }),
     //    new PurifyCSSPlugin({ //移除无用的css（vue文件无效果）
	    //   // Give paths to parse for rules. These should be absolute!
	    //   paths: glob.sync(
	    //   		path.join(__dirname, 'src/views/*.vue')
	    //   	)
	    // })
	]
}
