const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  devtool: 'inline-source-map',
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    },
    //extensions: [".js", ".jsx", ".scss", ".css", ".svg"]
    extensions: [".js", ".jsx", ".css", ".svg"]
  },

  module: {

    rules: [

      {
        test: /\.css$/i,
        //test: /\.scss$/i,
        use: [
          "style-loader", 
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[path]__[local]--[hash:base64:5]'
              }
            }
          },
          //"sass-loader"
        ]
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            //plugins: ["@babel/transform-react-jsx-source"]
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
