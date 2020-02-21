const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
// const vueLoader = require('vue-loader');
const MinicssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');



module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, 'build'),
    },
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({}), new TerserJSPlugin({})]
    },
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg|png)$/,
                use: {
                    loader: 'url-loader',
                    options:{
                        limit: 1024, // 把1kb一下的图片 打包到内存 base64
                        outputPath: './img',
                        // publicPath: 'www.baidu.com'
                    }
                }
            },
            // {
            //     enforce: 'pre',
            //     test: /\.js$/,
            //     use: 'eslint-loader'
            // },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: [MinicssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: [MinicssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
            },
            // {
            //     test: /\.vue$/,
            //     loader: ['vue-loader']
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseBooleanAttributes: true,
                collapseWhitespace: true
            }
        }),
        new MinicssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    devServer: {
        port: 4000,
        contentBase: './build',
        open: true,
    }



}