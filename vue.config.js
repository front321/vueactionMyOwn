module.exports = {
    devServer: {
        open: true,
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:3010/',
                //changeOrigin: true,
                pathRewrite: {
                    '^/api':''
                }
            }
        }
    },
    configureWebpack: {
        devtool:"source map"
    }
}