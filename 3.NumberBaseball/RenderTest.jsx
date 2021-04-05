const React = require('react');
const {Component} = React;

class Test extends Component{
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {},
        array: [],
    };
    onClick = () => {
        // this.setState({});      // react는 이렇게 아무것도 변하지 않더라도 setState가 호출되면 랜더링도 호출된다.
        this.setState({
            array:[...this.state.array, 1],     // 배열이나 객체같은 경우 펼쳐서 넣어야지 변화를 감지한다.
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext){
        if(this.state.counter !== nextState.counter){
            return true;
        }
        return false;       // 그래서 이렇게 개발자가 직접 랜더링이 호출되는 조건을 적어주는 것이 좋다.
    }

    render(){
        console.log("렌더링", this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }
}

module.exports = Test;

// 인프런 강좌 링크 shouldComponentUpdate함수와 pureComponentUpdate: https://www.inflearn.com/course/web-game-react/lecture/21587?tab=curriculum