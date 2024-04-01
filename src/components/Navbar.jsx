import { AppBar, IconButton, Toolbar } from "@mui/material"
import { Link, useLocation } from "react-router-dom";
import logo from '../../public/logo.svg';
import SearchBar from "./SearchBar";
import { Menu } from "@mui/icons-material";

const Navbar = ({openSidebar, setOpenSidebar}) => {

  const { pathname } = useLocation();
  console.log(pathname)

  return (
    <AppBar position="sticky" top="0" sx={{background: '#000', py:1.5, boxShadow: 'none', transition: '.4s', zIndex:5 }}>
      <Toolbar 
        sx={{
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: 3
        }}>
        <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
          <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar />
        {(pathname === '/' || pathname.includes('/category/')) && (
          <IconButton sx={{display: {sm:'none', xs:'block'}}} onClick={() => setOpenSidebar(true)}>
            <Menu />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar