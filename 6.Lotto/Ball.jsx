import React, { memo } from 'react'        // 데이터가 없는 컴포넌트는 memo나 pure컴포넌트를 사용하는 것이 좋다

// class Ball extends PureComponent {
//     render(){
//         const { number } = this.props;
//         let background;
//         if(number <= 10){
//             background = 'red';
//         } else if(number <= 20){
//             background = 'orange';
//         } else if(number <= 30){
//             background = 'yellow';
//         } else if(number <= 40){
//             background = 'blue';
//         } else {
//             background = 'green';
//         }
//         return(
//             <>
//                 <div className="ball" style={{ background }}>{number}</div>
//             </>
//         )
//     }
// }

const Ball = memo(({ number }) => {
    // const { number } = this.props;
    let background;
    if(number <= 10){
        background = 'red';
    } else if(number <= 20){
        background = 'orange';
    } else if(number <= 30){
        background = 'yellow';
    } else if(number <= 40){
        background = 'blue';
    } else {
        background = 'green';
    }
    return(
        <div className="ball" style={{ background }}>{number}</div>
    )
})

export default Ball;