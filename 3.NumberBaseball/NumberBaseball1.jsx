// const React = require('react');
// const {Component} = React;
// const Try1 = require('./Try1');
import React, {Component, createRef} from 'react';
import Try1 from './Try1';

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
class NumberBaseball1 extends React.Component{
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = (e) => {
        const {result, value, tries, answer} = this.state;
        e.preventDefault();
        if(value === answer.join('')){
            this.setState({
                result: '홈런',
                tries: [...tries, { try : value, result: '홈런!'}],
            })
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9){
                this.setState({
                    result: `10번 넘게 틀려서 실패 답은 : ${answer.join(',')}`
                });
                alert('게임을 다시 시작합니다.');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [], 
                });
                this.inputRef.current.focus();
            } else {
                for(let i = 0; i < 4; i++){
                    if(answerArray[i] === answer[i]){
                        strike++;
                    } else if(answer.includes(answerArray[i])){
                        ball++;
                    }
                }
                this.setState({
                    tries:[...tries, {try: value, result : `${strike}스트라이크 ${ball}볼입니다.`}],
                    value: '',
                })
                this.inputRef.current.focus();
            }
        }
    };

    onChangeInput = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    inputRef = createRef();
    render(){
        const {result, value, tries} = this.state;
        return(
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.inputRef} onChange={this.onChangeInput} maxLength={4} value={value} />
                </form>
                <div>시도 : {tries.length} </div>
                <ul>
                    {tries.map((v,i) => {
                        // console.log(v);
                        return(
                            <Try1 key={`${i+1}차 시도 :`} tryInfo={v}/>
                        )
                    })}
                </ul>
            </>
        )
    }
}

// module.exports = NumberBaseball1;
export default NumberBaseball1;