const path = require('path')

module.exports={
    mode: 'development',
    entry: {
        home: './src/home/index.js',
        signup: './src/signup/index.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },
    watch:true
}
