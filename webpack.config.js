const path = require('path');
const addMdWebpackPlugin = require('./plugins/addMdWebpackPlugin')
module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	resolveLoader: {
		modules: ['node_modules', './loaders']
	},
	module: {
		rules: [{
			test: /\.txt$/, // 专门处理txt文件
			use: [
				{
					loader: './loader/uppercaseLoader',
				},
			]
		},{
            test: /\.js$/,
            use: [
                {
                    loader: './loader/jsLoader'
                }
            ]
        }]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
    plugins: [
        new addMdWebpackPlugin()
    ]
}
