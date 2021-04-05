// const React = require('react');
// const {Component} = React;
import React from 'react';
class Try1 extends React.Component{
    // constructor(props){
        // super(props);
        // 생성자 혹은 setState같은 함수는 객체선언만으로는 힘든 다른 세밀한 동작이 필요할 때 사용된다
    // }

    state = {
        result : this.props.tryInfo.try,        // 이런식으로 부모에서 온 props를 자식이 사용하게 만들 수 있다.
    }
    onClick = () => {
        this.setState({
            result:'1',
        })
    }
    render(){
        return(
            <li>
                <div>{this.props.tryInfo.try}</div>
                <div>{this.props.tryInfo.result}</div>
                <div onClick={this.onClick}>{this.state.result}</div>
            </li>
        )
    }
}

// module.exports = Try1;
export default Try1;