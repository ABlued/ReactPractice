const React = require('react');
const {Component, PureComponent} = React; //PureComponent는 shouldComponentUpdate를 구현한 옵션이다.

class Test extends PureComponent{
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {},     // 하지만 PureComponent 단점은 객체나 배열의 변화를 잘 알아차리지 못한다.
        array: [],      // ex : array.push()
    };
    onClick = () => {
        // this.setState({});      // react는 이렇게 아무것도 변하지 않더라도 setState가 호출되면 랜더링도 호출된다.
        this.setState({
            array:[...this.state.array, 1],     // 배열이나 객체같은 경우 펼쳐서 넣어야지 변화를 감지한다.
        })
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext){       
    //     if(this.state.counter !== nextState.counter){
    //         return true;
    //     }
    //     return false;       // 그래서 이렇게 개발자가 직접 랜더링이 호출되는 조건을 적어주는 것이 좋다.
    // }

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
// 여기서 shouldComponentUpdate함수의 nextContext는 설명해보자면 다음과 같다. 
// 컴포넌트가 A -> B -> C 가 있고 만약 A의 props를 C에게 넘겨주고 싶을 때 B를 거쳐가야한다.
// 하지만 props를 갖고 사용하지도 않는 컴포넌트에게 전달하는 것은 뜻하지 않은 랜더링이 일어날 수 있기에 좋은 방법이 아니다
// 그래서 nextcontext 인자를 사용해 직접 보내줄 컴포넌트를 전달하게 되는 것이다.
// 그리고 이것을 응용한 것이 redux이다.
// 인프런 강좌 링크 shouldComponentUpdate함수와 pureComponentUpdate: https://www.inflearn.com/course/web-game-react/lecture/21587?tab=curriculum