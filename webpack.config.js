const path = require('path')


module.exports = (env) => {
    return {
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
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }] 
            }]
        },
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'public/'),
                publicPath: '/'
            }
        },
        devtool: env.production? '': 'eval-source-map'
    }
}