const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')
const packageJson = require('./package.json')
module.exports = () => {
  const config = {
    mode: 'development',
    entry: './src/index',
    output: {
      publicPath: 'http://localhost:8081/',
      filename: '[name].[contenthash].js',
    },
    devServer: {
      port: 8081,
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
        name: 'header',
        filename: 'remoteEntry.js',
        exposes: {
          './HeaderComponent': './src/bootstrap'
        },
        shared: packageJson.dependencies,
      }),
    ],
  }
  return config
}