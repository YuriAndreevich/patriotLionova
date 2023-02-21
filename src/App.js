import React from "react";
import { Link } from "react-router-dom";
import './App.scss'
import img1 from './img/cards/1.jpg'
import img2 from './img/cards/2.jpg'
import img3 from './img/cards/3.jpg'
import img4 from './img/cards/4.jpg'
import ModalComponent from "components/ModalComponent/MainModal";
import data1 from './img/cards/1/data.js'
import data2 from './img/cards/2/data.js'
import data3 from './img/cards/3/data.js'
import data4 from './img/cards/4/data.js'

function App() {
  return (
    <div className="main">
      <div className="main-patriot">
        <Link to="/patriot/p1">«П</Link>
        <Link to="/patriot/p2">А</Link>
        <Link to="/patriot/p3">Т</Link>
        <Link to="/patriot/p4">Р</Link>
        <Link to="/patriot/p5">И</Link>
        <Link to="/patriot/p6">О</Link>
        <Link to="/patriot/p7">Т:</Link>

      </div>
      <div className="main-patriot-desc">
        <Link to="/patriot/wenewpeople"> мы - новое поколение!»</Link>
      </div>
      <div className="main-patriot-card">
        <ModalComponent src={img1} text='Год мира и созидания' data={data1} />
        <ModalComponent src={img2} text='К любому повороту готовы' data={data2} />
        <ModalComponent src={img3} text='Память, которой жить в веках' data={data3} />
        <ModalComponent src={img4} text='Такая добрая традиция' data={data4} />
      </div>

    </div>
  );
}

export default App;
