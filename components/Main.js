import { useState } from "react";
import Board from "./Board";
import RestartButton from "./RestartButton";

const Main = () => {
    const [currPlayer, setCurrPlayer] = useState('X');
    const [board, setBoard] = useState(new Array(9).fill(''));
    const [winningMessage, setWinningMessage] = useState('');
    const [isGameOver, setIsGameOver] = useState(false);

    const WINNING_COMBINATION = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const hasWon = (board) => {
        let won = false;
        WINNING_COMBINATION.forEach((comb) => {
            if (board[comb[0]] == currPlayer && board[comb[1]] == currPlayer && board[comb[2]] == currPlayer) {
                won = true;
            }
        })
        return won;
    }

    const handleClick = (i) => {
        if (isGameOver) return;
        if (board[i] !== '') return;
        const newBoard = board.map((value, j) => {
            if (i === j) {
                return currPlayer;
            } else {
                return value;
            }
        })
        setBoard(newBoard);
        console.log("new: " + newBoard);
        if (hasWon(newBoard)) {
            setWinningMessage(`${currPlayer} Has Won`);
            setIsGameOver(true);
        } else {
            if (newBoard.every((value) => value != ''))
            {
                setWinningMessage("It's a draw");
                setIsGameOver(true);
            } else {
                setCurrPlayer(currPlayer == 'X' ? 'O' : 'X');
            }
        }
    }
    
    const handleRestart = () => {
        setCurrPlayer('X');
        setWinningMessage('');
        setBoard(board.map(() => {
            return '';
        }))
        setIsGameOver(false);
    }

    return (
        <div className="main">
            <h1>Tic Tac Toe</h1>
            <h2>It's {currPlayer} Turn</h2>
            <Board className="board" board={board} onClick={handleClick} />
            <h2 className="winningMessage">{winningMessage}</h2>
            <RestartButton onClick={handleRestart} />
        </div>
    );
}
 
export default Main;