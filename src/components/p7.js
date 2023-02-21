import React from "react";
import "./p.scss";
import p1bg from "../img/p6bg.jpg";
import BackArrow from "./backarrow";
import ModalComponent from "./ModalComponent";
import tt2 from '../img/tt2.pdf'


function p7() {
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
        <p className="p-content-title">ТВОЙ ВКЛАД</p>
        <p className="p-content-stix">Ведь мы иное поколенье,</p>
        <p className="p-content-stix"> Мы будущего флаг!</p>
        <p className="p-content-italic">
          Формирование навыков социально-значимой, общественно-полезной
          деятельности на благо мира и созидания.
        </p>
        <p className="p-content-meop">
          «ТВОЙ ВКЛАД» - блок, содержащий цикл мероприятий по осознанию
          учащимися общественно значимого результата своего труда, социальной
          ответственности, взаимовыручки и взаимопомощи.
        </p>
        <div> <ModalComponent name='1. Видео-обращение «Зачем помогать людям»' href='https://drive.google.com/file/d/1dKShCO1ZXq59YGgJDxotQ227FcR_qSDO/preview' /></div>
        <div> <ModalComponent name='2. Образовательный туризм «Город, знакомый до слез…»' href={tt2} /></div>
      </div >
    </div >
  );
}

export default p7;
