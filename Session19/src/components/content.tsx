import React from 'react'
import  { useTheme } from '../context/ThemeProvider '
export default function ThemeProvider () {
    const { theme, toggleTheme } = useTheme()
    const style = {
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff"
    }
  return (
    <div style={style}>
      <button onClick={toggleTheme}> My Themed App</button>
      <p>day la phan noi dung chinh cua ung dung</p>
      <p>Thêm hien tai la: {theme}</p>

    </div>
  )
}
