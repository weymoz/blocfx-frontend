const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    },
    extensions: [".js", ".jsx", ".scss", ".css", ".svg"]
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        include: path.resolve(__dirname, 'src/assets/images'),
        use: [
          {
            loader: "file-loader",
          }
        ]
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src/assets/sprites'),
        use: [
          {
            loader: "svg-sprite-loader",
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new SpriteLoaderPlugin({
        spriteAttrs: {
            fill: 'currentColor'
        }
    })
  ]
};
