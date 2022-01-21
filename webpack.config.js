const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: './src/App.tsx',
  mode: "development",
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
        },
        
      ]
    
    }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
    }),
  ],
};