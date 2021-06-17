import React, {useState} from 'react';

const Try = ({tryInfo}) => {    //props도 구조분해해서 사용할 수 있다.

    const [result, setResult] = useState(tryInfo.result);       //자식이 props를 바꿔야한다면 이렇게 state를 넣어서 바꿔야한다.
    const onclick = () => {
        setResult('1');
    }

    return (
        <li>
            <div>{tryInfo.try}</div>
            <div onClick={onclick}>{tryInfo.result}</div>
        </li>
    )
}

export default Try;