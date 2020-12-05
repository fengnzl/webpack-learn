const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { src, dll, public: publicFolder } = require('./paths');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const fs = require('fs');

const plugins = [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: `${src}/index.html`,
    title: 'final configuration',
    filename: 'index.html', // output file
    favicon: `${src}/images/favicon.png`,
  }),
  // Copies files from target to destination folder
  new CopyWebpackPlugin({
    patterns: [
      {
        from: publicFolder,
        to: 'assets',
        globOptions: {
          ignore: ['*.DS_Store'],
        },
      },
    ],
  }),
]

const dllFiles = fs.readdirSync(dll);
dllFiles.forEach(file => {
  const wholeFile = `${dll}/${file}`;
  if (/\.*\.dll.js$/.test(file)) {
    plugins.push(new AddAssetHtmlWebpackPlugin({
      filepath: wholeFile
    }))
  }
  if (/\.*\.manifest.json$/.test(file)) {
    plugins.push(new webpack.DllReferencePlugin({
      manifest: wholeFile
    }))
  }
})


module.exports = plugins;