import React from 'react';
//import logo from './logo.svg';
import './Home.css'
import Header from '../Header/HeaderMain'
import Footer from '../Footer/Footer';
import Carousel from './Carousel';
import Text from './Text';
import { Link } from "react-router-dom"



function Home () {
    return (
      <div className='Home'>
        <Header/>
        <div className="content">
          <div className="carousel">
            <Carousel/>
          </div>
          <div className="text">
            <Text/>
          </div>
        </div>
        <Footer/>
      </div>
    )
}

export default Home;
