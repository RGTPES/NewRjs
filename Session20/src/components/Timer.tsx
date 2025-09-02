import React, { useEffect, useState } from 'react'

export default function Timer() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div>
      <p>count : {count}</p>
    </div>
  )
}