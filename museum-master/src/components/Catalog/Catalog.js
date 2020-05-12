import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as serviceWorker from '../../serviceWorker'
import { Link } from "react-router-dom"






function Catalog () {
    return (
      <div className='Catalog'>
        <Header/>
        <div className="content">
        УУУУУУУУУУУУУ
        </div>
        <Footer/>
      </div>
    )
}

export default Catalog;
serviceWorker.unregister();
