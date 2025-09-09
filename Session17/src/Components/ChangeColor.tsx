import React, { useState } from 'react'

export default function ChangeColor() {
  const [isRed, setIsRed] = useState(false);

  const handleChangeColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      <h1 style={{ color: isRed ? 'red' : 'black' }}>Tieu de van ban</h1>
      <button onClick={handleChangeColor}>Thay doi mau</button>
    </div>
  );
}