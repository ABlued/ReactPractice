import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'        // useCallback은 함수 자체를 기억한다.
import Ball from './Ball'
/**
 * 이 단원 정리
 * useMemo는 값을 저장한다.(함수를 저장하는 것이 아니다.) 2번째 인자가 달라지면 재실행
 * useCallback은 함수를 저장한다. 2번째 인자가 달라지면 재실행
 * useEffect는 2번째 인자가 달라지면 return을 실행
 */


function getWinNumbers() {
    const candidate = Array(45).fill().map((v,i) => i + 1);
    const shuffle = [];
    while(candidate.length > 0){
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}
// Hooks는 랜더링 시 전체가 다시 시작된다.
const LottoHooks = () => {

    const lottoNumbers = useMemo(() => getWinNumbers(), []);        // useMemo는 함수의 결괏값을 기억하여 결괏값이 바뀌지 않는한 첫번째 인자(함수)는 호출되지 않는다.
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    useEffect(() => {
        // useEffect안에 usestate, usecallback 등 쓰면 안된다.
        // useEffect는 한 컴포넌트에 여러 개를 사용할수도 있다.
        for(let i = 0; i < winNumbers.length - 1; i++){   // 보너스 공을 빠져야하니 length - 1
            timeouts.current[i] = setTimeout(() => {        // 이것은 current 요소에 값을 넣는 거니 timeouts.current 값이 바뀌는 것이 아니다.
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() =>{
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
        return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            })
        }       // useEffect 내의 return은 componentDidupdate 시 수행할 로직을 구현
    }, [timeouts.current]);      // 빈 배열이면 componentDidMount와 동일
                // 배열에 요소가 있으면 ComponentDidMount랑 componentDidupdate 둘 다 수행

    useEffect(() => {
        // console.log('winNumbers 값이 변경되었습니다.');
    }, [winNumbers]);

    const mounted = useRef(false);      // ComponentDidMount에는 실행이 되지 않고 componentDidupdate에는 실행이 되고싶게 만들고 싶을 때
    useEffect(() => {
        if(!mounted.current){
            mounted.current = true;
        } else {
            // componentDidupdate에서만 실행되고 싶은 로직
            console.log('winNumbers 값이 변경되었습니다.');

        }
    }, [/*바뀌는 값 */winNumbers])


    const onClickRedo = useCallback(() => { // useCallback으로 감싸면 함수 컴포넌트가 다시 재실행해도 감싼 함수는 재실행되지 않는다.
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];  // timeouts.current가 변하게 되는 시점
    },[winNumbers]);    // 두번째 인자가 바뀌면 새로 실행된다.
    // useCallback으로 감싸줘야 할 때 : 자식 컴포넌트에게 props로 함수를 전달할 때(useCallback이 없으면 매번 새로운 함수로 실행되는데 자식 입장에선 매번 새로운 함수를 넘겨주었으니 계속 랜더링하게 된다.)

    return (
        <>
            <div>당첨 숫자</div>
                <div id="결과창">
                    {winBalls.map(v => <Ball key={v} number={v}/>)}
                </div>
                <div>보너스</div>
                {bonus && <Ball number={bonus}/>}
                {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    )
}

export default LottoHooks