const path = require('path')

module.exports={
    mode: 'development',
    entry: {
        home: './src/home/index.js',
        login: './src/login/index.js',
        signup: './src/signup/index.js',
        preferences: './src/preferences/index.js',
        available: './src/available/index.js',
        login_admin: './src/login_admin/index.js',
        admin: './src/admin/index.js',
        menu: './src/admin/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },
    experiments: {
        topLevelAwait: true
      },
    watch:true
}