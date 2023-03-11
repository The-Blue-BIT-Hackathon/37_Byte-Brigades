const path = require('path')

module.exports={
    mode: 'development',
    entry: './src/signup.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'signup.js'
    },
    watch:true
}
