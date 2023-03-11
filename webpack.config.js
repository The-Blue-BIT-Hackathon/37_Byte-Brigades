const path = require('path')

module.exports={
    mode: 'development',
    entry: './src/login.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'login.js'
    },
    watch:true
}
