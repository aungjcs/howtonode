var fs       = require( 'fs' );
var os       = require( 'os' );
var path     = require( 'path' );
var _        = require( 'underscore' );
var webpack  = require( 'webpack' );
var aliasLib = {};
var current  = process.cwd();
var dir = {
    dest: './dist',
    common: './public/js/common',
    css: './public/css',
    csslib: './public/lib/css',
    js: './public/js',
    jslib: './public/lib/js'
};

module.exports = {
    entry: {
        watch: ['./js/watch.js']
    },
    output: {
        path: dir.dest,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /bootstrap(?:\.min)?\.js$/,
            loader: 'imports?jQuery=jquery'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.tmpl$/,
            loader: 'html'
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+|\d+)?$/,
            loader: 'url?limit=200000&minetype=application/font-woff'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=200000&minetype=application/octet-stream'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=200000&minetype=application/vnd.ms-fontobject'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=200000&minetype=image/svg+xml'
        }, {
            test: /moment.js$/,
            loader: 'imports?this=>window'
        }],
        noParse: [
            /moment(?:\.min)?\.js$/,
            /underscore\.string(?:\.min)?\.js$/
        ]
    },
    devServer: {

        //contentBase: '.',
        host: 'localhost',
        inline: true,
        port: 3010,
        publicPath: '/dist'
    }
};
