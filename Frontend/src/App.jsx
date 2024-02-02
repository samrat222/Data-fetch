import './App.css'
import GetData2 from './Component/GetData2'
import GetData from './Component/GetData'
import Testing from './Component/Testing'
import { createContext, useState } from 'react';

export const themeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <GetData />
      </div>
    </themeContext.Provider>
  )
}

export default App
