const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

// добавили плагин
module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/about/about.js',
        statistics: './src/statistics/statistics.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                    'file-loader?name=./images/[name].[ext]', // указали папку, куда складывать изображения
                    {
                        loader: 'image-webpack-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            //
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            minify: false,
            hash: true,
            chunks: ['index'],
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            minify: false,
            hash: true,
            chunks: ['about'],
            template: './src/about/about.html',
            filename: 'about.html',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            minify: false,
            hash: true,
            chunks: ['statistics'],
            template: './src/statistics/statistics.html',
            filename: 'statistics.html',
        }),

        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default'],
            },
            canPrint: true,
        }),
    ],
};