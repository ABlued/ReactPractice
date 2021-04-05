// import React, { Component } from 'react';
// const React = require('react');
// const { Component } = React;
// const Try = require('./Try');
import React from 'react';
import Try from './Try';
function getNumbers(){  //숫자 N개를 중복하지않고 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0; i < 4; i++){
        const chosen = candidate.splice(Math.floor(Math.random()*(9 - i)),1)[0];
        array.push(chosen);
        console.log(chosen);
    }
    return array;
}
class NumberBaseball extends React.Component{
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],      // state내에 배열에다 push()함수를 쓰면 안된다. 그 이유는 react에서 render()함수는 원래의 배열과 바뀐 배열의 참조가 달라야지 실행되는데 push()함수는 전적으로 참조가 같으므로 
                        // render함수가 실행이 안되어 바뀌어지지 않는다.
                        // 참고링크 : https://www.inflearn.com/course/web-game-react/lecture/21582?tab=curriculum 이 영상에 6분부터 보자
    };
    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.value === this.state.answer.join('')){        // 다 맞췄을 경우
            this.setState({
                result:'홈런',
                tries:[...this.state.tries,{ try: this.state.value, result: '홈런!'}],      // 그래서 push가 아닌 예전 배열을 복사해 새로운 배열에 직접 넣어야한다.
            })
        } else {
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            console.log(answerArray);
            let strike = 0;
            let ball = 0;
            if(this.state.tries.length >= 9){       // 틀린 횟수가 10번 이상일 경우
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}였습니다`,
                });
                alert('게임을 다시 시작합니다.');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {        //틀린 횟수가 10번 미만일 경우
                for(let  i = 0; i < 4; i++){
                    if(answerArray[i] === this.state.answer[i]){
                        strike++;
                    } else if (this.state.answer.includes(answerArray[i])){
                        ball++;
                    }
                }
                this.setState({
                    tries: [...this.state.tries, { try : this.state.value, result: `${strike} 스트라이크 ${ball} 볼입니다`}],
                    value: '',
                })
            }
        }
    };

    onChangeInput = (e) => {
        this.setState({
            value: e.target.value,
        });
    };
    fruitsAry = [
            ['사과','맛있다'],
            ['배','달다'],
            ['포도','시다'],
            ['자두','시다'],
            ['바나나','달다']
        ];
    fruits = [
        {fruit: '사과', taste: '맛있다'},
        {fruit: '배', taste: '달다'},
        {fruit: '포도', taste: '시다'},
        {fruit: '자두', taste: '시다'},
        {fruit: '바나나', taste: '달다'},
    ];
    render(){
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {this.fruitsAry.map((v)=>{      //react에서 배열을 사용해 반복문을 사용하는 방법
                        // return (
                        //     <li><b>{v[0]}</b> - {v[1]}</li>
                        //     );
                        })}
                </ul>
                <ul>
                {this.fruits.map((v,i)=>{      // react에서 객체를 사용해 반복문을 사용하는 방법
                        return (     // key는 고유한 값을 집어넣어야 한다
                            <>
                                {/* <li key={v.fruit + v.taste}><b>{v.fruit} : {v.taste}</b> - {i}</li>
                                <Try value={v} index={i}/> */}
                                {/* jsx내에 주석은 이렇게 중괄호 안에 주석을 써야한다. */}
                            </>
                        );// value={v} index={i} 를 props라고 한다. props는 컴포넌트에서 다른 컴포넌트로 값을 주고받을때 쓰이는 개념이다.
                    })}
                </ul>
                <ul>
                    {this.state.tries.map((v,i) => {
                        return (
                            <Try key={`${i + 1}차 시도 :`} tryInfo={v}/>
                        )
                    })}
                </ul>
            </>
        )
    }
}
// export const hello = 'hello';       // import { hello }
// module.exports = NumberBaseball;
export default NumberBaseball;      // ES2015 문법 module.exports와 똑같진 않고 호환이 된다 정도로만 생각하자. 가져올때는 import NumberBaseball;


// 노드 문법
// const React = require('react');
// exports.hello  = 'hello';
// module.exports = NumberBaseball;
// 보통 노드에서는 import가 쓰일수 없는데 babel import를 자동으로 moduel로 바꾸기 때문에 실행이 되는 것이다.
// webpack.config.js 에선 웹팩은 노드가 돌리기 때문에 웹팩 내에선 import가 쓰이면 오류가 난다.