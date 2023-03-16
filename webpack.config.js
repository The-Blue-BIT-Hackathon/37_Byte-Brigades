const path = require('path')

module.exports={
    mode: 'development',
    entry: {
        home: './src/home/index.js',
        login: './src/login/index.js',
        signup: './src/signup/index.js',
        preferences: './src/preferences/index.js',
        admin: './src/admin/index.js',
        menu: './src/menu/index.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },
    watch:true
}
