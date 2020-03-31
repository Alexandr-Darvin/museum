import React from 'react';
import './App.css';
import image0 from './0.jpg';
import image1 from './1.jpg';
import image2 from './2.jpg';
function App() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3500">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image0} class="d-block w-100" />
      <div class="carousel-caption d-none d-md-block">
        <h2> ПОЛИТЕХНИЧЕКИЙ МУЗЕЙ ТТИ ЮФУ</h2>
        <p>Добро пожаловать на наш официальный сайт!</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image1} class="d-block w-100" />
      <div class="carousel-caption d-none d-md-block ">
        <h2>Более ___ экспонатов</h2>
        <p>___ различных выставок</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block w-100"  />
      <div class="carousel-caption d-none d-md-block">
        <h2>Экскурсии по музею</h2>
        <p>Вы можете узнать об актуальных событиях во вкладке "Новости"</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  );
}

export default App;
