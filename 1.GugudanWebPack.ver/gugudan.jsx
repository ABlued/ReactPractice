const React = require('react');
const { useState, useRef} = React;

const GuGuDan = () => {     // 클래스가 아닌 함수 내에서도 setState를 쓸 수 있게 만든 것이 Hooks이다. Hooks는 리액트를 함수형 프로그래밍처럼 하게 만든것이다.
    //구구단을 Hooks로 나타내보기
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));     // const [state, setState]
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef();        // 일반 리액트와 다른 점 : setState 대신 useState를 사용한다

    const onSubmitForm = (e) => {
        e.preventDefault();
        inputRef.current.focus();
        if(parseInt(value) === first * second){
            // 일반 리액트와 다른 점 : return을 하지 않는다.
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            setResult((preResult) => {      // preResult : 이전 Result 값
                return '정답: ' + value
            });
        } else {
            setResult('땡');
            setValue('');
        }
    }
    const onChangeInput = (e) => {
        setValue(e.target.value);
    }
    // render 대신 return 바로 해주면 렌더링 역할을 한다.
    return(
        <>
            <div>{first}곱하기{second}는?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} value={value} onChange={onChangeInput}/>
                <button>입력!</button>    
            </form>
            <div id="result">{result}</div>
        </>
    )    
}

module.exports = GuGuDan;