import React, { useRef, useState } from 'react'

export default function RenderCounter() {
  const [value, setValue] = useState("")
  const renderCount = useRef(1)

  renderCount.current += 1

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <p>So lan render: {renderCount.current}</p>
    </div>
  )
}