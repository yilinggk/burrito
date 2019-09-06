const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css', '.scss'],
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    watch: true,
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: ['file-loader?name=src/assets/backgrounds/[name].[ext]'],
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader?indentedSyntax=false'],
                include: path.resolve(__dirname, '../'),
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
