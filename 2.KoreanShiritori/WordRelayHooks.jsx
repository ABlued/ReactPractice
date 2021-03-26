const React = require('react');
const { useState, useRef } = React;

const WordRelayHooks = () => {
    const [word, setWord] = useState('시작');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    state = {
        word: '시작',
        value: '',
        result: '',
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        inputRef.current.focus();
        if(word[word.length - 1] === value[0]){
            setWord(value);
            setValue('');
            setResult('딩동댕');
        } else {
            setValue('');
            setResult('땡');            
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="wordInput">글자를 입력하세요.</label>
                <input ref={inputRef} value={value} onChange={onChangeInput}/>
                <button>입력</button>
            </form>
            <div>{result}</div>
        </>
    );// htmlFor은 실제 label for로 바뀐다.
};

module.exports = WordRelayHooks;