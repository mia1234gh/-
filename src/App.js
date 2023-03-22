// eslint-disable-next-line
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ProSidebarProvider } from "react-pro-sidebar";
import Topbar from "./scenes/global/Topbar";
import SidebarLayout from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/index";
import Team from "./scenes/team/Team";
import Contacts from "./scenes/contacts/Contacts";
import Invocies from "./scenes/invocies/Invocies";
import Form from "./scenes/form/Form";
import FAQ from "./scenes/faq/FAQ";
import Bar from "./scenes/bar/Bar";
import Line from "./scenes/line/Line";
import Geography from "./scenes/geography/Geographt";
import Pie from "./scenes/pie/Pie";
import Calendar from "./scenes/calendar/Calendar";
function App() {
  // eslint-disable-next-line
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* reset css to defaults */}
        <CssBaseline />
        <ProSidebarProvider>
          <div className="app">
            <SidebarLayout />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invocies" element={<Invocies />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
