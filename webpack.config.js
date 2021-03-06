var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: "./src/main.js",
    optimization: {
    // We no not want to minimize our code.
    minimize: false
    },
    output: {
        filename: "../build/bundle.js"
    },
    watch: true
}