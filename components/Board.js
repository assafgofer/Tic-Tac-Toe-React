import Cell from "./Cell";

const Board = ({board, onClick}) => {

    return (
        <div className="board">
            {board.map((value, i) => (
                <Cell value={value} key={i} onClick={() => onClick(i)} />
            ))}
        </div>
    );
}

export default Board;