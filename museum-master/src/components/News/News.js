import './News.css'
import ph3 from './photo3.png';
import Carousel from './Carousel.js';
import Text from './Text1.js';
import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as serviceWorker from '../../serviceWorker'
import { Link } from "react-router-dom"






function News () {
    return (
      <div className='News'>
        <Header/>
            <div className="content">

                <div className="carousel">
                    <Carousel />
                </div>
                
                <div className="card-news-body">
                    <img src={ph3} class="news-img"></img>
                    <h5 class="news-text">НОВОСТИ</h5>
                </div>
                <hr></hr>

                <div className="text">
                    <Text />
                </div>
      
        </div>
        <Footer/>
      </div>
    )
}

export default News;
serviceWorker.unregister();
