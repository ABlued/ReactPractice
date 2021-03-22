#### 필기 노트  

React Hooks 이용하는 법
---

1. 컴포넌트를 변수 안에 담기
```
const GuGuDan () => {};
```
  
2. state는 useState를 사용하기
```
const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9)); 
const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
const [value, setValue] = React.useState('');
const [result, setResult] = React.useState('');
```

3. render는 그냥 return 으로 처리된다.
```
return  <React.Fragment>
            <div>{first}곱하기{second}는?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} value={value} onChange={onChangeInput}/>
                <button>입력!</button>    
            </form>
        <div id="result">{result}</div>
    </React.Fragment>
```
4. 각 함수는 변수안에 담기
```
 const onSubmitForm = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    if(parseInt(value) === first * second){
        setFirst(Math.ceil(Math.random() * 9));
        setSecond(Math.ceil(Math.random() * 9));
        setValue('');
        setResult((preResult) => {      // preResult : 이전 Result 값
            return '정답: ' + value + '이전 값' + preResult
        });
    } else {
        setResult('땡');
        setValue('');
    }
}
```