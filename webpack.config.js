const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './src/bundle.js',
    path: __dirname,
  },
  devServer: {
    inline:true,
    port: 10000
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.json$/,
        loader: path.resolve('./customLoader/customLoader.js'),
      },
    ],
  }
};
 