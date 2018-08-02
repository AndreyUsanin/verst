const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },


  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader']
      },
      {
        test: /\.(html)$/,
        include: path.join(__dirname, 'src/partials'),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[hash]-[name].[ext]',
              fallback: 'file-loader'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },

  plugins: [

    new HtmlWebpackPlugin({
      title: "Output managment",
      filename: "index.html",
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin([
      { from: './src/images', to: "images" },
      // { from: './src/fonts', to: "fonts" }
    ])

  ]
};


