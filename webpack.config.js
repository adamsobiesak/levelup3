var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const docsDir = path.resolve(__dirname, 'docs');

module.exports = {
    entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: docsDir
    },
    plugins: [new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
          })],
    mode: 'development',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
              },
        ]
    }
};