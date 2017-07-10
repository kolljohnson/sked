const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './client/index.js',
    output: {
	path: path.resolve('dist'),
	filename: 'index_bundle.js'
    },
    module: {
	loaders: [
	    { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
	    { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
	    { test: /^(?!.*?\.module).*\.css$/,
	      use: ['style-loader', 'css-loader']
	    },
	    { test: /\.module\.css$/, use: ['style-loader', {
		loader: 'css-loader',
		options: {
		    modules: true
		}
	    }]
	  }
	]
    },
    plugins: [HtmlWebpackPluginConfig],
    externals: [
        'react/lib/ExecutionEnvironment',
        'react/lib/ReactContext',
        'react/addons',
        'react-addons-test-utils'
    ]
}
