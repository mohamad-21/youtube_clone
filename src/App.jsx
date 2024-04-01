import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box, CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material"
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from "react";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    mode: 'dark',
  }
})

const App = () => {

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <BrowserRouter>
          <Paper sx={{background: '#000'}}>
            <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
            <Paper sx={{minHeight: '86.5vh', py:4, background: 'transparent'}}>
              <Routes>
                <Route path="/" element={<Feed openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />} />
                <Route path="/category/:category" element={<Feed openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
              </Routes>
            </Paper>
            <Footer />
          </Paper>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App