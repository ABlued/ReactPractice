const path = require('path');
module.exports = {
    name: 'koreanShiritori-setting',
    mode: 'development',   // 실서비스에는 production 을 사용한다
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.jsx']      // 파일 이름입력할때 확장자(js,jsx)를 입력하지 않아도 웹팩이 자동으로 찾을 수 있게 해준다
    },
    // 입력
    entry:{
        app:['./client'],
    },
   module: {
       rules: [{
        test: /\.jsx?/,     // jsx파일이랑 js파일에 이 규칙을 적용하겠다.
        loader: 'babel-loader',
        options:{
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
        },
       }],
   },        // 입력에 있는 것을 모듈화해서 출력으로 보낸다
    // 출력
    output:{
        path: path.join(__dirname, 'dist'),     // dirname : 현재 폴더 를 말하고 현재폴더 안에 들어있는 dist폴더 라는 뜻이 된다.
        filename: 'app.js'
    },
};