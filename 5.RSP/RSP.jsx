import React, { Component } from 'react'
// 클래스 컴포넌트는 constructor => render => ref => componentDidMout
// => (setState/props 바뀔때) => shouldComponentUpdate(true) => render => componentDidUpdate
// 부모컴포넌트가 나를 없앴을 때 => componentWillUpmount => 소멸

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
}

const scores = {
    가위: 1,
    바위: 0,
    보: -1,

}

const computerChoice = (imgCoord) => {      // 컴퓨터가 가위바위보 중 어떤 것을 내는지 알아내는 함수
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === imgCoord;
    })[0]
};
class RSP extends Component {

    state = {
        result: '',
        imgCoord: rspCoords.바위,
        score: 0,
    };
    interval;
    componentDidMount(){    // 컴포넌트가 처음 실행될 때 수행되는 함수(리랜더링때는 실행되지 않음, 여기에 비동기 요청을 많이 한다.)
        this.interval = setInterval(this.changeHand, 100);
    }
    
    componentDidUpdate(){   // 리랜더링 때 수행되는 함수
        
    }
    
    componentWillUnmount(){   // 컴포넌트가 제거되기 직전에 수행되는 함수
        clearInterval(this.interval);
    }

    onclickBtn = (choice) => () => {        //
        const { imgCoord } = this.state;
        clearInterval(this.interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if(diff === 0){
            this.setState({
                result: '비겼습니다.',
            });
        } else if([-1, 2].includes(diff)){
            this.setState((prevState) => {
                return{
                    result: '이겼습니다.',
                    score: prevState.score + 1,

                }
            })
        } else {
            this.setState((prevState) => {
                return{
                    result: '졌습니다.',
                    score: prevState.score - 1,
                }
            });
        }
        setTimeout(() => {
            this.interval = setInterval(this.changeHand, 100);
        }, 2000);
    }

    changeHand = () => {
        const {imgCoord} = this.state;
        if(imgCoord === rspCoords.바위){
            this.setState({
                imgCoord: rspCoords.가위,
            })
        } else if(imgCoord === rspCoords.가위) {
            this.setState({
                imgCoord: rspCoords.보,
            })
        } else if(imgCoord === rspCoords.보){
            this.setState({
                imgCoord: rspCoords.바위,
            })
        }
    }
    render(){
        const { result, score, imgCoord} = this.state;
        return(
            <>
                <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} />
                <div>
                    <button id="rock" className="btn" onClick={this.onclickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={ this.onclickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={ this.onclickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}</div>

            </>
        );
    }
}

export default RSP
// 이미지 링크 : https://en.pimg.jp/023/182/267/1/23182267.jpg