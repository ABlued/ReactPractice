import React, { useCallback, useEffect, useRef, memo } from 'react'
import { CLICK_CELL } from './TicTacToe';
const Td = memo(({ rowIndex, cellIndex, dispatch, cellData}) => {

    const ref = useRef([]);     // 성능 최적화를 위한 꿀팁 하나 : 변하는 state를 감지하기 위해 ref에 모든 state 및 래퍼런스를 집어넣고 어떻게 변하는지 확인한다
    useEffect(() => {
        // console.log(rowIndex === ref.current[0], cellIndex === ref.current[1], dispatch === ref.current[2], cellData === ref.current[3])
        // console.log(cellData, ref.current[3]);      // 변하는 것을 찾았으면 그 state가 어떻게 변하는지 보자(아무런 문제가 없다면 부모 컴포넌트로 가서 이와 같은 방법을 다시 적용해본다.)
        ref.current = [rowIndex, cellIndex, dispatch, cellData];
    }, [rowIndex, cellIndex, dispatch, cellData])
    const onClickTd = useCallback(() => {
        // console.log(rowIndex, cellIndex, cellData);
        if(cellData){
            return;
        }
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex })      // 칸을 클릭하면
    },[cellData]);      // 바뀔 데이터를 이 2번째 인자에 넣어준다.
    return (
        <td onClick={onClickTd}>{cellData}</td>
    )
})

export default Td
