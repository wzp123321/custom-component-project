module.exports = {
    chainWebpack: config => {
        config.module
            .rule('less')
            .test(/\.less$/)
            .oneOf('vue')
            .use('px2rem-loader')
            .loader('px2rem-loader')
            .before('postcss-loader') // this makes it work.
            .options({
                remUnit: 75
            })
            .end()
    },
    configureWebpack: config => {
        config.externals = {
            $: 'jquery',
            jquery: 'jquery',
            XLSX: 'XLSX'
        }
    }

}