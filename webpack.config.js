const path = require('path')
/**@type {import('webpack'.Configuration)} */
const config = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'library.js',
        library: 'library',
        libraryTarget: 'umd'
    },
}
module.exports = config