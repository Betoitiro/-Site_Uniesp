import { Box, Container, CssBaseline } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar"
import BannerAd from "./components/BannerAd"
import Inicial from "./pages/Inicial"
import Faculdade from "./pages/Faculdade"
import DpoLgpd from "./pages/DpoLgpd "
import Noticias from "./pages/Noticias"
const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline/>
      <Container maxWidth='1g'
      sx={{
        backgroundColor:'#f7f7f7',
        minHeight:'100vh', 
        padding: '16px',
        borderRadius:'8px'
      }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" p={2}
        sx={{backgroundColor: '#fff', 
        borderRadius:'8px', 
        boxShadow:1}}>
          <Navbar/>
        </Box>
        <BannerAd/>
        <Box mt={4}>
          <Routes>
            <Route path="/" element={<Inicial/>}/>
            <Route path="/sobre-faculdade" element={<Faculdade/>}/>
            <Route path="/dpo-lgpd" element={<DpoLgpd/>}/>
            <Route path="/noticias" element={<Noticias/>}/>
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  )
}

export default App