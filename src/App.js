import React, {useState} from 'react'
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import Dashboard  from './Components/Dashboard';
import Analytics from './Components/Analytics';
import { Routes, Route } from "react-router-dom";
import Insights from './Components/Insights';
const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <>
     <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <SideBar isSidebar={isSidebar}/>
          <main className='content'>
            <TopBar />
            <Routes>
              <Route exact path="/" element={<Dashboard/>}/>
              <Route exact path="/Analytics" element={<Analytics/>}/>
              <Route exact path="/Insights" element={<Insights/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}

export default App
