const path = require('path');
const webpack  = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    entry: {
        app: './client',
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    module:{
        rules:[{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options : {
                presets: [['@babel/preset-env', {
                    targets:{
                        browsers: ['> 5% in KR' /*,'last 2 chrome versions'*/],       // 지원하는 브라우저를 명시할 수 있다. 명시하게 되면 프로그램 사용량이 좀더 줄어드게 되니 속도가 가급적 빨라질수 있다.
                    },              // 한국 내에 브라우져 점유율이 5%이상일 때 이 프로그램을 지원한다.
                    // 참조 : https://github.com/browserslist/browserslist#queries
                    debug: true,    
                }], '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({debug: true}),
    ],
    output:{
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
}