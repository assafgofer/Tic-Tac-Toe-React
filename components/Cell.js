const Cell = ({value, onClick}) => {

    return (
        <div className="cell" onClick = {onClick}>{value}</div>
    );
}
 
export default Cell;



// const Cell = ({currMark, currPlayer}) => {
//     const [mark, setMark] = useState('');

//     const handleCellClick = () => {
//         if (currMark) {
//             return;
//         } else {
//             console.log(`setting mark to ${currPlayer}`);
//             setMark(currPlayer);
//         }
//     }

//     return (
//         <div className="cell" onClick={handleCellClick}>
//             {mark}
//         </div>
//     );
// }
 
// export default Cell;