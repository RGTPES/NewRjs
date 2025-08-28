import React, { createContext, useState } from 'react'
type Theme = "light" | "dark"
type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)





export default function ThemeProvider ({ children }: { children: React.ReactNode }) {
    const [theme ,settheme] = useState<Theme>("light")
    const toggleTheme = () => {
        settheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export const useTheme =()=>{
    const context = React.useContext(ThemeContext)
  
    return context

}