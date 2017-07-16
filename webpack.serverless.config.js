
module.exports = {
    entry: './handler.js',
    target: 'node',
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel?' + JSON.stringify({
                plugins: [
                    'transform-runtime',
                    'transform-es2015-modules-commonjs'
                ],
                presets: ['es2015', 'react', 'stage-0'],
            })],
            include: __dirname,
            exclude: /node_modules/,
        },
        {
            test: /\.scss$/,
            loaders: ["css-loader", "sass-loader"]
        },{
                test: /\.json$/,
                loader: 'json-loader'
            }]
    }
};