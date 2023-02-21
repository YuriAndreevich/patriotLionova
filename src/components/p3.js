import React from "react";
import './p.scss'
import p3bg from "../img/p3bg.jpg";
import BackArrow from "./backarrow";
import ModalComponent from "./ModalComponent";
import T3 from '../img/t3.pdf'
import T2 from '../img/t2.pdf'




function p3() {
  return (
    <div
      className="p"
      style={{
        background: `url('${p3bg}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <BackArrow />
      <div className="p-content">
        <p
          className="p-content-title" >ТВОРЧЕСТВО</p>
        <p className="p-content-stix">Мы - новое поколение,</p>
        <p className="p-content-stix"> Мы прорубаем свое течение!</p>
        <p className="p-content-italic">Развитие творческого потенциала учащихся, конкурсная деятельность.</p>
        <p className="p-content-meop">«ТВОРЧЕСТВО» - мероприятия блока дают возможность проявить творческие задатки всех участников мобиля в различных видах деятельности, но посвященных гражданско-патриотическому направлению.</p>
        <div><ModalComponent name='1. Видео-признание «Мелодия отчего дома»' href='https://drive.google.com/file/d/1LLSzmrh0-Qeml-WcEdCyyCjO1jLyjr4P/preview' /></div>
        <div><ModalComponent name='2. Перформанс «Ожившие статуи»' href={T2} /></div>
        <div> <ModalComponent name='3. КВН «Друзья, прекрасен наш союз»' href={T3} /></div>
      </div >
    </div >
  );
}

export default p3;
