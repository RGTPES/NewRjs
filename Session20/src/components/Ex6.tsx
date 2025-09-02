import React, { useRef } from 'react'
import { useState } from 'react'
export default function Ex6() {
    const [open, setOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Mo Modal</button>
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 32,
              borderRadius: 8,
              minWidth: 320,
              textAlign: "center"
            }}
          >
            <h2>Modal</h2>
            <input ref={inputRef} type="text" placeholder="Nhap noi dung..." />
            <div style={{ marginTop: 16 }}>
              <button onClick={() => setOpen(false)}>Dong Modal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
    
