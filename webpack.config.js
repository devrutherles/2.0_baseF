const path = require('path');

module.exports = {
  devServer: {
    compress: true,
    hot: true, // ativa o recarregamento automático
    port: 3000,
  },
  module: {
    rules: [
      {
        contentBase: path.join(__dirname, 'dist'),
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },
};
