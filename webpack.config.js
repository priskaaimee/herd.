const path = require('path')

module.exports = {
    mode: 'development',
    entry: "./src/src.js",
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'herd.js'
    },
    watch: true
}