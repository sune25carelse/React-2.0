import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import styled, { css } from "styled-components";


function Header({ title, userImage, darkMode }) {
  const Button = styled.button`
    margin: 10px;
    padding: 20px;

    ${(props) =>
        props.darkMode &&
        css`
            background: gray;
        `}
  `;


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
        </div>
        <div className="header__right--mobile">
            <MenuIcon />
        </div>
    </div>
  )
};

export default Header;