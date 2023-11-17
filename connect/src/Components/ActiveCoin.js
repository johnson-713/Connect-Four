import React, { useEffect, useState } from "react";

const ActiveCoin = ({ turn, dropped, setDropped, setTurn }) => {
  const [column, setColumn] = useState(2);

  const handleKeyDown = (e) => {
    
  }

  useEffect(() => {
    document.addEventListener("keyup", handleKeyDown, false);

    return () => document.removeEventListener("keyup", handleKeyDown);
  });
  return <div className={`active p${turn} column-${column}`} />;
};

export default ActiveCoin;
