import React from 'react';
import { cols, rows } from '../Constants/Constants';
import './Board.css';

const Board = () => {
    const board =
        new Array(rows)
        .fill()
        .map(_ => new Array(cols).fill(''))
  return (
    <div className='board'>
      {board.map((row, i) =>
        row.map((_, j) => <div key={i+'-'+j} />))}
    </div>
  )
}

export default Board;
