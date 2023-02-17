import React from "react";
import "./p.scss";
import p1bg from "../img/p1bg.jpg";
import MButton from "./button";
import Modal from './modal'
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

          
        <MButton> 1. Видео-посвящение «Прадеды, деды – солдаты Победы» </MButton>
      <Modal />
            <MButton> 2. Видео-эстафета «Солдатский подвиг поэтической строкой»</MButton>
            <MButton> 3. Эстафета поколений «Мир в наследство» </MButton>
      </div>
    </div>
  );
}

export default P1;
