import React from 'react';
import './Header.css';
import logo from './logo.JPG';
import sfedu from './sfedu.png';
import { Route, Switch, Redirect, withRouter } from "react-router-dom"
import { Link } from "react-router-dom"



function Header() {
    return (
      <div className="head">
        <Link to="/home"><div className="logo" ><img src={logo}></img></div></Link>
        <div className="info">
          <div className="name"> <h3>ПОЛИТЕХНИЧЕСКИЙ МУЗЕЙ ЮФУ</h3></div>
          <div className="nav">
            <Link to="/news"> Новости </Link>
            <Link to="/catalog"> Экспонаты </Link>
            <a href="http://sfedu.ru/">Официальный сайт ЮФУ</a>
          </div>
        </div>
        <div className="logo_sfedu"><img height="100px" src={sfedu}></img></div>
      </div>
    );
}
export default Header;
