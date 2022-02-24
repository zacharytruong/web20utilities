const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['raw-loader'],
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist'),
  },
};