const path = require('path');

module.exports = {
  devtool: false,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public_html', 'dist'),
    filename: 'app.bundle.js'
  }
};