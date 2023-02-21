import React from "react";
import "./p.scss";
import p1bg from "../img/bg.jpg";
import BackArrow from "./backarrow";
import ModalComponent from "./ModalComponent";
import ModalSwiper from './ModalComponent/Slider'
import data from '../img/i1/data'
import i2 from '../img/i2.pdf'




function p5() {
  return (
    <div
      className="p"
      style={{
        background: `url('${p1bg}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <BackArrow />
      <div className="p-content">
        <p className="p-content-title">ИНИЦИАТИВА</p>
        <p className="p-content-stix">Мы открыватели новых судеб,</p>
        <p className="p-content-stix"> Новых побед и больших границ!</p>
        <p className="p-content-italic">
          Привлечение учащихся к созидательной общественно-полезной
          деятельности; развитие лидерских качеств и креативного мышления
        </p>
        <p className="p-content-meop">
          «ИНИЦИАТИВА» - блок, включающий в себя мероприятия по продвижению
          любых благ, мирных инициатив, нацеленных на устойчивое развитие и
          благополучие нашей страны.
        </p>
        <div><ModalSwiper name='1. Акция «Размаўляй са мной па-беларуску»' href='' data={data} /></div>
        <div><ModalComponent name='2. Историко-краеведческий маршрут «Поведай подвиги усатого героя»' href={i2} /></div>
      </div >
    </div >
  );
}

export default p5;
