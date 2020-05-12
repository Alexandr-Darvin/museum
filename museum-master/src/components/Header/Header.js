import React from 'react';
//import './App.css';
import './Header.css';
import logo from './logo.JPG';
import Home from '../Home/Home'
import News from '../News/News'
import Catalog from '../Catalog/Catalog'
import { Route, Switch, Redirect, withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
//import Appointments from './components/Appointments/Appointments'


function Header() {
    return (
      <div className="head">
      <Link to="/home"><div className="logo" ><img src={logo}></img></div></Link>
        <div className="info">
        <div className="name"> ПОЛИТЕХНИЧЕСКИЙ МУЗЕЙ ЮФУ </div>
          <div className="nav">
            <Link to="/news"> Новости </Link>
            <Link to="/catalog"> Экспонаты </Link>
            <a href="http://sfedu.ru/">Официальный сайт ЮФУ</a>
          </div>
        </div>
      </div>
    );
}
export default Header;
