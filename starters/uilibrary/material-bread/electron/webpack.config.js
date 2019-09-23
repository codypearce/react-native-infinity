const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'renderer.js'),
  },
  node: {
    __filename: true,
    __dirname: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!(material-bread|react-native-vector-icons)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-flow-strip-types',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-export-default-from',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-regenerator',
            ],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader?limit=100000',
      },
    ],
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'react-native-svg': 'react-native-svg-web',
    },
  },
  output: {
    filename: 'bundle.js',
  },
  target: 'electron-renderer',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 7000,
  },
};
