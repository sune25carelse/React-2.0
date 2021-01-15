import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';

function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <img
                src="https://th.bing.com/th/id/OIP.88F_1Z5zGNZ-RIj3GfuPMAHaJl?pid=Api&rs=1"
                alt=""
            />
        </div>
        <div className="header__right">
            <Button>Login</Button>        
            <Button>Register</Button>        
        </div>
        <div className="header__right--mobile">
            <MenuIcon />
        </div>
    </div>
  )
};

export default Header;