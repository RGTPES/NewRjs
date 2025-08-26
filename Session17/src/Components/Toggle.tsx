import React, { useState } from 'react'

export default function Toggle() {
  const [show, setShow] = useState(true);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {show ? 'An tieu de' : 'Hien tieu de'}
      </button>
      {show && <h1>Tieu de</h1>}
    </div>
  );
}
