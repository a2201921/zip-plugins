const path = require('path')
const ZipPlugin = require('./plugins/zip-plugins')

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new ZipPlugin({
            filename: 'offline'
        })]
}