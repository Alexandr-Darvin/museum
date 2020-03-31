import React from 'react';
import './App.css';
import './Header.css';
import logo from './logo.JPG';


function App() {
  return (
    <div className="head">
      <div className="logo"><img src={logo}></img></div>
      <div className="info">
        <div className="name">ПОЛИТЕХНИЧЕСКИЙ МУЗЕЙ ТТИ ЮФУ </div>
        <div className="nav">
          <a href="News.html">Новости</a>
          <a href="Showpieses.html">Экспонаты</a>
        </div>
      </div>
    </div>
  );
}

export default App;
