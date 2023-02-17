import React from "react";
import { Link } from "react-router-dom";
import './main.scss'
import Card from '../card'
import img1 from '../../img/cards/1.jpg'
import img2 from '../../img/cards/2.jpg'
import img3 from '../../img/cards/3.jpg'
import img4 from '../../img/cards/4.jpg'

function main() {
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
      <Card src={img1} text='Год мира и созидания'/>
      <Card src={img2} text='К любому повороту готовы'/>
      <Card src={img3} text='Память, которой жить в веках'/>
      <Card src={img4} text='Такая добрая традиция'/>
      </div>

    </div>
  );
}

export default main;
