const path = require('path');

const basic = {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
}

module.exports = [
  {
    ...basic,
    entry: './src/main.ts',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
    },
  },
  {
    ...basic,
    entry: './test/entry.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'test', 'static'),
      libraryTarget: 'umd',
    },
  },
]
