import React from 'react'
import './Header.css';

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
            <button>Login</button>        
            <button>Register</button>        
        </div>
        <div className="header__right--mobile">
            <h2>Burger menu</h2>        
        </div>
    </div>
  )
};

export default Header;