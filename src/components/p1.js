import React from "react";
import "./p.scss";
import p1bg from "../img/p1bg.jpg";
import BackArrow from "./backarrow";
import ModalComponent from "./ModalComponent";
import Р3 from '../img/Р3.pdf'

function P1() {

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
        <p className="p-content-title">ПАМЯТЬ</p>
        <p className="p-content-stix">Мы – новое поколение!</p>
        <p className="p-content-stix">Мы никогда не забудем</p>
        <p className="p-content-stix">ваших отважных лиц!</p>
        <p className="p-content-italic">
          Воспитание уважения к ратному подвигу белорусского народа в годы самой
          страшной войны в истории человечества – Великой Отечественной.
        </p>
        <p className="p-content-meop">
          «ПАМЯТЬ» представляет собой блок мероприятий, посвященных Великой
          Победе.
        </p>

        <div><ModalComponent name='1. Видео-посвящение «Прадеды, деды – солдаты Победы»' href='https://drive.google.com/file/d/1w7ynngNWPR3y4yAg6NmUkbdNoqK_fYff/preview' /></div>
        <div><ModalComponent name='2. Видео-эстафета «Солдатский подвиг поэтической строкой»' href='https://drive.google.com/file/d/1n8LrRleB21mfnwumL24VbTos9D_SnfRH/preview' /> </div>
        <div><ModalComponent name='3. Эстафета поколений «Мир в наследство»' href={Р3} /></div>
      </div >
    </div >
  );
}

export default P1;
