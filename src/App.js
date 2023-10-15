import React, {useState} from 'react'
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import { Routes, Route } from "react-router-dom";
const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <>
     <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
        <SideBar isSidebar={isSidebar} />
          <main className='content'>
            <TopBar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}

export default App
