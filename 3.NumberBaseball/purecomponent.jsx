import React, { PureComponent, memo } from 'react';

class Try extends PureComponent {       // 클래스에는 purecomponent를 사용할 수 있고

    render(){
        // console.log(this.props);
        return(
            <li>
                <div>{this.props.tryInfo.try}</div>
                <div>{this.props.tryInfo.result}</div>
            </li>
        )
    }
}

const PureComponent = memo(({ tryInfo }) => {       // 함수에는 memo를 사용할 수 있다.
    return(
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.resut}</div>
        </li>
    )
});

export default PureComponent;