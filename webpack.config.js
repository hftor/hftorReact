var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractTextPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
              test: /\.svg$/,
              use: 'raw-loader'
            },
            {
              test: /\.scss$/,
              use: extractTextPlugin.extract({
                use:['css-loader', 'sass-loader']
              })
            }
        ]
    },
    plugins:[
      extractTextPlugin
    ]
};

module.exports = config;
