const React = require('react');
const { Component } = React;

class WordRelay extends Component{
    state = {
        word: '시작',
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        this.input.focus();
        const word = this.state.word;
        if(word[word.length - 1] === this.state.value[0]){
            this.setState({
                word: this.state.value,
                value: '',
                result: '딩동댕',
            });
        } else {
            this.setState((prev) => {
                return{
                    result: '땡',
                    value: '',
                }
            });
        }
    };

    onChangeInput = (e) => {
        this.setState({value : e.target.value});
    };

    onRefInput = (e) => {
        this.input = e;
    };
    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </>
        )
    }
}

module.exports = WordRelay;
