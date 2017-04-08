const production = process.env.NODE_ENV === 'production';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: 'css/style.css',
    allChunks: true
});

module.exports = {
    entry: [
        './src/main.js',
        // './src/scss/style.sass'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vue Starter',
            filename: 'index.html',
            template: 'src/index.html',
            inject: 'body'
        }),
        extractSass
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: extractSass.extract({
                            use: ['css-loader', 'sass-loader'],
                            fallback: 'vue-style-loader'
                        }),
                        sass: extractSass.extract({
                            use: ['css-loader', 'sass-loader?indentedSyntax'],
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /node_modules/,
                loader: extractSass.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(svg|jpe?g|gif|png)$/,
                exclude: /node_modules/,
                loader:'url-loader?limit=1024&name=img/[name].[ext]'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'vue-router$': 'vue-router/dist/vue-router.esm.js',
            'axios': 'axios/dist/axios.min.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
