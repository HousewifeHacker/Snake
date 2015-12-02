var webpack = require("webpack");

module.exports = {
    entry: {
        index: "./index.js",
    },
    output: {
        filename: "[name].js",
        path: "dist/"
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
	            presets: ['es2015']
                }
            },
        ]
    },
    plugins: [],
    devtool: 'source-map'
};