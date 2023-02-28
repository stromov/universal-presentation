const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (_, argv) => ({
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            colors: path.join(__dirname, 'src', 'styles', 'colors.css'),
            fonts: path.join(__dirname, 'src', 'styles', 'fonts.css'),
        },
    },
    devtool: argv.mode === 'development' ? 'source-map' : false,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 3,
                            name: '[hash:27].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        port: 3000,
        hot: true,
    },
    performance: {
        hints: false,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            favicon: path.resolve(__dirname, './public/favicon.png'),
            hash: true,
        }),
        new StyleLintPlugin({
            configFile: path.resolve(__dirname, 'stylelint.config.js'),
            files: '**/*.css',
            failOnError: false,
            quiet: false,
        }),
        new CopyPlugin({
            patterns: [{from: path.resolve(__dirname, 'public'), to: 'public'}],
        }),
    ],
});
