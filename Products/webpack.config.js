const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')
const packageJson = require('./package.json')
module.exports = () => {
  const config = {
    mode: 'development',
    entry: './src/index',
    output: {
      publicPath: 'http://localhost:8082/',
      filename: '[name].[contenthash].js',
    },
    devServer: {
      port: 8082,
      historyApiFallback: {
        index: '/',
      },
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new ModuleFederationPlugin({
        name: 'products',
        filename: 'remoteEntry.js',
        exposes: {
          './ProductsComponent': './src/bootstrap'
        },
        shared: packageJson.dependencies,
      }),
    ],
  }
  return config
}