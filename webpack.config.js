const GasPlugin = require('gas-webpack-plugin');
const BabelPlugin = require('babel-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'dist/index.js'
    },
    plugins: [
        new BabelPlugin({ presets: ["gas"] }),        
        new GasPlugin()
    ]
}