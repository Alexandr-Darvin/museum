import './News.css'
import ph3 from './photo3.png';
import Carousel from './Carousel.js';
import Text from './Text1.js';
import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as serviceWorker from '../../serviceWorker'
<<<<<<< HEAD
=======

>>>>>>> 0849a19e26a37d6e6ae21e7afb0c7ff2ab1db7a7





function News () {
    return (
      <div classNameName='News'>
        <Header/>
            <div className="content">

                <div className="carousel">
                    <Carousel />
                </div>
                
                <div className="card-news-body">
<<<<<<< HEAD
                    <img src={ph3} class="news-img" alt="иконка новостей"></img>
=======
                    <img src={ph3} className="news-img" alt="иконка новости"></img>
>>>>>>> 0849a19e26a37d6e6ae21e7afb0c7ff2ab1db7a7
                    <h5 className="news-text">НОВОСТИ</h5>
                </div>
                <hr></hr>

                <div classNameName="text">
                    <Text />
                </div>
      
        </div>
        <Footer/>
      </div>
    )
}

export default News;
serviceWorker.unregister();
