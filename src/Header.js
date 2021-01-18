import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import Button, { SalesButton } from './Components/Button';


function Header({ title, userImage, darkMode }) {
  
  return (
    <div className="header">
        <div className="header__left">
            <img
                src="https://th.bing.com/th/id/OIP.88F_1Z5zGNZ-RIj3GfuPMAHaJl?pid=Api&rs=1"
                alt=""
            />
        </div>

        {title && <h2>{title}</h2>}

        <div className="header__right">
            <Button darkMode={darkMode}>Login</Button>        
            <Button>Register</Button>  
            <SalesButton>BUY NOW</SalesButton>      
        </div>
        <div className="header__right--mobile">
            <MenuIcon />
        </div>
    </div>
  )
};

export default Header;