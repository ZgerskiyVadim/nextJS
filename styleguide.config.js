const path = require('path')

module.exports = {
    components: 'components/**/*.js',
    styleguideComponents: {
        Wrapper: path.join(__dirname, '/FelaProvider')
    },
    webpackConfig: {
        entry: 'next/lib/app.js',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/react' ],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }

                }
            ]
        }
    }
};