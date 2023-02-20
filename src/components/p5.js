import React from "react";
import "./p.scss";
import p1bg from "../img/bg.jpg";
import BackArrow from "./backarrow";
import ModalComponent from "./ModalComponent";



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
        <ModalComponent name='1. Акция «Размаўляй са мной па-беларуску»' href='' />
        <ModalComponent name='2. Историко-краеведческий маршрут «Поведай подвиги усатого героя»' href='' />
      </div >
    </div >
  );
}

export default p5;
