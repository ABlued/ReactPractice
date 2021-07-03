import React, { useRef, useEffect, useMemo } from 'react'
import Td from './Td'

const Tr = ({rowData, rowIndex, dispatch }) => {
    const ref = useRef([]);     // 성능 최적화를 위한 꿀팁 하나 : 변하는 state를 감지하기 위해 ref에 모든 state 및 래퍼런스를 집어넣고 어떻게 변하는지 확인한다
    useEffect(() => {
        console.log(rowData === ref.current[0], rowIndex === ref.current[1], dispatch === ref.current[2])
        ref.current = [rowData, rowIndex, dispatch];
    }, [rowData, rowIndex, dispatch])
    return (
        <tr>
            {Array(rowData.length).fill().map((td, i) => (
                    <Td key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}>{''}</Td>
                    ))}
        </tr>
    )
}

export default Tr
