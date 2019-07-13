const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css', '.scss'],
    },
    output: {
        path: `${__dirname}/dist`,
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    module: {
        rules: [
            { test: /\.(png|svg)$/, loader: 'url-loader?limit=8192' },
            {
                test: /^((?!\.module).)*\.css$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.module\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!',
                ],
            },
            {
                test: /\.scss$/,
                loaders: ['css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                loaders: ['css-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(js|jsx)$/,
                loaders: ['react-hot-loader/webpack', 'babel-loader'],
                include: [path.join(__dirname, 'src'), path.join(__dirname, 'web')],
            },
        ],
    },
};
