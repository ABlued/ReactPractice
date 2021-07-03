import React, { useEffect, useReducer, useCallback } from 'react'
import Table from './Table'
// usereducer는 state가 비동기적으로 바뀐다
// usereducer는 redux에서 따온 개념이며 state가 10개 이상 많아질 경우 한 번에 setstate를 처리하기 위한 개념이다.
const initialState = {
    winner: '',
    turn : 'o',
    tableData: [['','',''], ['','',''], ['','','']],
    recentCell: [-1, -1],
};
export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
const reducer = (state, action) => {    // state가 어떻게 바뀔지 정한다
    switch(action.type){
        case SET_WINNER:
            // state.winner = action.winner 이렇게 직접 state를 대입하면 안됨
            return{
                ...state,
                winner: action.winner,
            }
        case CLICK_CELL: {

            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]]; // 클릭한 cell만 바꿔주고 나머지 cell을 불변성을 유지하기 위한 코드다. immer라는 라이브러리로 가독성 해결
            tableData[action.row][action.cell] = state.turn;
            return{
                ...state,
                tableData,
                recentCell: [action.row, action.cell]
            };
        }
        case CHANGE_TURN: {
            return {
                ...state,
                turn: state.turn === 'o' ? 'x' : 'o',
            }
        }
        case RESET_GAME: {
            return {
                ...state,
                tableData: [['','',''], ['','',''], ['','','']],
                recentCell: [-1, -1],
            }
        };
        default: return state;
    }
};
//reducer의 역할은 state를 함부로 바꾸지 못하게 하고 action을 dispatch함으로써 state를 바꾸게 한다. 
const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData, turn, winner, recentCell } = state;
    const onClickTable = useCallback(() => {
        dispatch({ type: SET_WINNER, winner: '0' });      // dispatch 안에 들어가는 것은 action이라 부른다.
    }, []);

    useEffect(() => {
        const [row, cell] = recentCell;
        if(row < 0){
            return;
        }
        let win = false;
        if(tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn){     // 가로줄 검사
            win = true;
        }
        if(tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[0][cell] === turn){  // 세로줄 검사
            win = true;
        }
        if(tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn){           // 대각선 검사
            win = true;
        }
        if(tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn){
            win = true;
        }
        if (win){   // 승리시
            dispatch({ type: SET_WINNER, winner: turn })
            dispatch({ type: RESET_GAME })
        } else {    // 무승부 검사
            let all = true;                 // all이 true면은 무승부
            tableData.forEach((row) => {    // 무승부 검사
                row.forEach((cell) => {
                    if(!cell){      // 칸이 하나라도 차있지 않다면
                        all = false;
                    }
                });
            });
            if(all){
                dispatch({ type: RESET_GAME })
            } else {
                dispatch({ type: CHANGE_TURN});
            }
        }
    }, [recentCell])
    return (
        <>
            <Table onClick={onClickTable} tableData={tableData} dispatch={dispatch} />
            {winner && <div>{winner}님의 승리</div>}
        </>
    )
}

export default TicTacToe
