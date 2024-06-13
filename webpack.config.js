const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your React application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
    publicPath: '/' // Public URL path
  },
  module: {
    rules: [
      // JavaScript/JSX files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // Font files (for Font Awesome)
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Extensions to resolve
  },
  devServer: {
    contentBase: './dist', // Serve content from 'dist' directory
    port: 3000, // Port to run dev server
    historyApiFallback: true // Fallback to index.html for react-router
  }
};
