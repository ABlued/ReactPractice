import React, { useState, useRef } from 'react';

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);
    const timeout = useRef(null);       //useRef로 사용된 값은 바뀌어도 rendering이 되지 않는다
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if(state === 'waiting'){
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');
            timeout.current = setTimeout(() => {            // useRef를 사용했을때는 current를 사용하는 것을 잊지말자
                setState('now');
                setMessage('지금 클릭');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);    //2~3초 랜덤
        } else if(state === 'ready'){   // 성급하게 클릭
            clearTimeout(this.timeout);
            setState('waiting');
            setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
        } else if(state === 'now'){     //반응속도 체크
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요.');
            setResult((prevState) => {
                return [...prevState, endTime.current - startTime.current]
            })
         } 
    }
    const onReset = () => {
        setResult([]);
    };

    const renderAverage = () => {
        // render안에선 for if를 사용할려면 코드가 더러워져서 사실상 못 쓴다. 그래서 삼항연산자나 &&을 사용한다.
        return result.length === 0 ? null :
            <>
                <div>평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms</div>
                <button onClick={onReset}>리셋</button>
            </>    
    }
    return(
        <>
            <div 
                id="screen"
                className={state}
                onClick={onClickScreen}
            >
                {message}
            </div>
            {/* {(() => {       // 이런식으로 if문을 사용할 수 있지만 가독성이 좋아보이진 않는다.
                if(result.length === 0){
                    return null;
                } else {
                    return result.length === 0 ? null :
                    <>
                        <div>평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms</div>
                        <button onClick={onReset}>리셋</button>
                    </>   
                }
            })()} */}
            {renderAverage()}
        </>
    )
}

export default ResponseCheck;