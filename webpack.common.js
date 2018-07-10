const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: [
      './src/index.js',
      './src/scss/style.sass'
    ]
  },
  module: {
    rules: [{
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ['vue-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(svg|jpe?g|gif|png)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=img/[name].[ext]']
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        // exclude: /node_modules/,
        use: ['file-loader?name=fonts/[name].[ext]']
      },
      {
        test: /\.css$/,
        use: [{
          loader: "css-loader",
          options: {
            minimize: {
              safe: true
            }
          }
        }]
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              minimize: {
                safe: true
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks(chunk) {
            // Add async vendor here
            return ['mde'].indexOf(chunk.name) === -1;
          }
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue Starter',
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "style.css"
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8081/'
  }
};