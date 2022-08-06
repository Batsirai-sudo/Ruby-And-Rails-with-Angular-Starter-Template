const { webpackConfig } = require('@rails/webpacker')


webpackConfig.loaders.append('html', {
    test: /\.html$/,
    use: [{
        loader: 'html-loader',
        options: {
            minimize: true,
            removeAttributeQuotes: false,
            caseSensitive: true,
            customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
            customAttrAssign: [ /\)?\]?=/ ]
        }
    }]
})

 

module.exports = webpackConfig
