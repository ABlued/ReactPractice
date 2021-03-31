// import React, { Component } from 'react';
const React = require('react');
const { Component } = React;

function getNumbers(){  //숫자 N개를 중복하지않고 랜덤하게 뽑는 함수

}
class NumberBaseball extends Component{
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };
    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };
    render(){
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {[['사과','맛있다'], ['바나나','맛없다'],['포도', '시다'],['귤','시다']].map((v)=>{      //react에서 배열을 사용해 반복문을 사용하는 방법
                        return (
                            <li><b>{v[0]}</b> - {v[1]}</li>
                        );
                    })}
                </ul>
                <ul>
                    {[
                        {fruit: '사과', taste: '맛있다'},
                        {fruit: '배', taste: '달다'},
                        {fruit: '포도', taste: '시다'},
                        {fruit: '자두', taste: '시다'},
                        {fruit: '바나나', taste: '달다'},
                    ].map((v,i)=>{      //react에서 객체를 사용해 반복문을 사용하는 방법
                        return (
                            <li key={v.fruit + i}><b>{v.fruit}</b> - {v.taste}</li>     // key는 고유한 값을 집어넣어야 한다
                        );
                    })}
                </ul>
            </>
        )
    }
}
// export const hello = 'hello';       // import { hello }
module.exports = NumberBaseball;
// export default NumberBaseball;      // ES2015 문법 module.exports와 똑같진 않고 호환이 된다 정도로만 생각하자. 가져올때는 import NumberBaseball;


// 노드 문법
// const React = require('react');
// exports.hello  = 'hello';
// module.exports = NumberBaseball;
// 보통 노드에서는 import가 쓰일수 없는데 babel import를 자동으로 moduel로 바꾸기 때문에 실행이 되는 것이다.
// webpack.config.js 에선 웹팩은 노드가 돌리기 때문에 웹팩 내에선 import가 쓰이면 오류가 난다.