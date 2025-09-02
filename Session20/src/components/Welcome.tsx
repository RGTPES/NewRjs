import React, { useEffect } from 'react'

export default function Welcome() {
    useEffect(() => {
        console.log("duoc render lan dau");
        
    }, []);
  return (
    <div>
      <h1>Chao mung den voi web cua chung Toi</h1>
      
    </div>
  )
}
