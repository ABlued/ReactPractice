const path = require('path');
const webpack  = require('webpack');
// process.env.NODE_ENV = 'production';     // 실서비스시
module.exports = {
    mode: 'development',        // 실서비스시 : production
    devtool: 'eval',            // 실서비스시 : hidden-source-map
    entry: {                    // 입력(출력은 output)
        app: './client',        // 여러개를 넣을거면 배열형태로 넣어주면된다. ex) app: ['./client','...']
    },
    resolve: {
        extensions: ['.js','.jsx'],     //js파일이나 jsx파일이면 그것이 entry파일로 인식하게 한다.
    },
    module:{        //entry 파일을 module에 있는 내용들을 적용한 후 output에 적용
        rules:[{
            test: /\.jsx?/,
            loader: 'babel-loader', //jsx에 있는 파일들을 babel-loader를 적용시켜 옛 브라우저에도 동작하게 한다.
            options : {
                presets: [['@babel/preset-env', {
                    targets:{
                        browsers: ['> 5% in KR' /*,'last 2 chrome versions'*/],       // 지원하는 브라우저를 명시할 수 있다. 명시하게 되면 프로그램 사용량이 좀더 줄어드게 되니 속도가 가급적 빨라질수 있다.
                    },              // 한국 내에 브라우져 점유율이 5%이상일 때 이 프로그램을 지원한다.
                    // 참조 : https://github.com/browserslist/browserslist#queries
                    debug: true,    
                }], '@babel/preset-react'],
                plugins: [/*'@babel/plugin-proposal-class-properties'*/],
            },
        }],
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({debug: true}),
    ],
    output:{                    // 출력(입력은 entry)
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),     // __dirname 은 현재폴더
    },                                          // 현재폴더에 dist라는 폴더를 자동생성
}