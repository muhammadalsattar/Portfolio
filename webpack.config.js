const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    return {
        resolve: {
            fallback: {
                "fs": false,
                "path": require.resolve("path-browserify"),
                "os": require.resolve("os-browserify/browser"),
            }
        },
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'public/static'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            }, {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }]
        },
        plugins: [
            new MiniCssExtractPlugin()
        ],
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'public/'),
                publicPath: '/'
            }
        },
        devtool: env.production? 'source-map': 'eval-source-map'
    }
}
