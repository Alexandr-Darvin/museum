import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Exhibit.css'
import sonata from './sonata.jpg'
import logo from './exhibit.png';
import * as serviceWorker from '../../serviceWorker'
import { Link } from "react-router-dom"



function Exhibit () {
  return (
    <div className='Exhibit'>
      <Header/>
      <div className="content">
        <div className="nameplate">
          <div className="card-news-body">
            <img src={logo} class="news-img"></img>
            <h5 class="news-text">ЭКСПОНАТЫ</h5>
          </div>
          <hr></hr>
        </div>
        <div className="namex"> <div className="namexx"><h4>Радиоприемник транзисторный "Соната"</h4></div></div>
        <div className="common">
          <div className="about"><h6>Радиоприемник транзисторный "Соната", переносной, четырехдиапазонный, 
            II класса, Корпус прямоугольной формы, черного цвета. Серийный заводской номер 898845. 
            Произведен в СССР Денинградским заводом "Радоиприбор". Цена на дату производства (1965г.)
            - 73р. 34к.
            <p> Кол-во экземпляров: 1</p>
            <p> Материал: пластик, металл</p>
            <p> Место нахождения: в тумбочке, в кладовой</p>
            <p> Примечание: в нерабочем состоянии на 23.04.2014г. Арх. 16т. 2</p>
            </h6></div>
          <div className="photo"> <img src={sonata}></img>
          
          </div>
        </div>
        <div className="back">
        <Link to ="/catalog" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Вернуться назад</Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Exhibit;
serviceWorker.unregister();
