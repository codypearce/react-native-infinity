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
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-transform-flow-strip-types",
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-proposal-export-namespace-from",
              "@babel/plugin-transform-runtime",
              "@babel/plugin-syntax-export-default-from",
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-proposal-export-default-from"
            ]
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
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
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
