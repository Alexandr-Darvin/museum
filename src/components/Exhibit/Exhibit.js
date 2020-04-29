import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as serviceWorker from '../../serviceWorker'
import { Link } from "react-router-dom"






function Exhibit () {
    return (
      <div className='Exhibit'>
        <Header/>
        <div className="content">
        ЭКЗИБИТ ТАЧКА НА ПРОКАЧКУ ПХАХ
        </div>
        <Footer/>
      </div>
    )
}

export default Exhibit;
serviceWorker.unregister();
