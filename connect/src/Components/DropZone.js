import React, { useState } from 'react';
import { cols, rows, size } from '../Constants/Constants';
import './DropZone.css';
import ActiveCoin from './ActiveCoin';

const DropZone = () => {
    const [turn, setTurn] = useState(1)
    const [dropped, setDropped] = useState([
        {x: 5, y: 4, player: 1},
        {x: 4, y: 1, player: 2},
        {x: 3, y: 2, player: 2},
        {x: 1, y: 3, player: 1}
    ])
  return (
    <div className='dropZone'>
        {dropped.map((m, i) => 
            <div key={i} className={`p${m.player}`}
             style={{transform: `translate(${m.y*size}px,${m.x*size+150}px)`}}/>)}
        <ActiveCoin
            turn={turn}
            dropped={dropped}
            setDropped={setDropped}
            setTurn={setTurn}
        />
    </div>
  )
}

export default DropZone;
