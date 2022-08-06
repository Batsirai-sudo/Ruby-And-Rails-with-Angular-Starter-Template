process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// const webpackConfig = require('./base')
   
// module.exports = webpackConfig
// const {merge} = require('webpack-merge') // update from previous
// const { webpackConfig } = require('@rails/webpacker')
   
const { webpackConfig, merge } = require('@rails/webpacker')
const customConfig = require('./custom')

module.exports = merge(webpackConfig, customConfig)
