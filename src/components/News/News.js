import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as serviceWorker from '../../serviceWorker'
import { Link } from "react-router-dom"






function News () {
    return (
      <div className='News'>
        <Header/>
        <div className="content">
        ЫЫЫЫЫЫЫЫ
      
        </div>
        <Footer/>
      </div>
    )
}

export default News;
serviceWorker.unregister();
