const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!(material-bread|react-native-vector-icons)\/).*/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./dist/index.html",
      filename: "./index.html"
    })
  ],
  resolve: {
    // auto resolves any react-native import as react-native-web
    alias: {
      "react-native": "react-native-web"
    },
    extensions: [".web.js", ".js"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    hot: true
  }
};
