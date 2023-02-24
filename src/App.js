import React from "react";
import { Link } from "react-router-dom";
import './App.scss'
import img1 from './img/cards/1.jpg'
import img2 from './img/cards/2.jpg'
import img3 from './img/cards/3.jpg'
import img4 from './img/cards/4.jpg'
import ModalComponent from "components/ModalComponent/MainModal";
import MyModal from "components/ModalComponent/";
import data1 from './img/cards/1/data.js'
import data2 from './img/cards/2/data.js'
import data3 from './img/cards/3/data.js'
import data4 from './img/cards/4/data.js'
import { Button } from "@chakra-ui/react";

function App() {
  return (
    <div className="main">
      <div className="main-patriot">
        <Link to="/p1">«П</Link>
        <Link to="/p2">А</Link>
        <Link to="/p3">Т</Link>
        <Link to="/p4">Р</Link>
        <Link to="/p5">И</Link>
        <Link to="/p6">О</Link>
        <Link to="/p7">Т:</Link>
      </div>
      <div className="main-patriot-desc">
        <Link to="/wenewpeople"> мы - новое поколение!»</Link>
      </div>
      <div className="main-patriot-card">
        <ModalComponent src={img1} text='Год мира и созидания' data={data1} />
        <ModalComponent src={img2} text='К любому повороту готовы' data={data2} />
        <ModalComponent src={img3} text='Память, которой жить в веках' data={data3} />
        <ModalComponent src={img4} text='Такая добрая традиция' data={data4} />
      </div>
      <MyModal   text='Интерактивный плакат содержит два уровня. На главной сранице, т.е. на первом уровне интерактивного плаката, каждая буква слова ПАТРИОТ гиперактивная. Гиперактивны также фраза  «мы - новое поколение!» и разделы новостной ленты. На втором уровне можно познакомиться с содержанием воспитательных дел и мероприятий, кликнув на их названия ' name='Навигационная инструкция' className="instruction"/>
  
    </div>
    
  );
}

export default App;
