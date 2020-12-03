const { resolve } = require("path");
module.exports = {
  entry: resolve(__dirname, "src/index.ts"),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader"}
    ]
  }
}