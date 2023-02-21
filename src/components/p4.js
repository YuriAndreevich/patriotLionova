import React from "react";
import p4bg from "../img/p4bg.jpg";
import "./p.scss";
import BackArrow from "./backarrow";
import ModalComponent from "./ModalComponent";
import ModalSwiper from './ModalComponent/Slider'
import data from '../img/rod1/data'
import p2 from '../img/p2.pdf'

function p4() {
  return (
    <div
      className="p"
      style={{
        background: `url('${p4bg}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <BackArrow />
      <div className="p-content">
        <p
          style={{
            color: "#782304",
            textAlign: "center",
            fontSize: "8.8rem",
            padding: "30px",
          }}
        >
          РОДИНА МАЛАЯ
        </p>
        <p className="p-content-stix">Мы – новое поколение!</p>
        <p className="p-content-stix"> Мы будущего звено!</p>

        <p className="p-content-italic">
          Развивать потребности в познании культурно-исторических ценностей
          региона – Полоцкой земли; поисково-исследовательская деятельность.
        </p>
        <p className="p-content-meop">
          «РОДИНА МАЛАЯ» - мероприятия блока дают возможность знакомиться с
          легендарной историей Полоцкой земли, где формировалась белорусская
          государственность, белорусская история и культура, белорусская
          духовность.
        </p>
        <div>
          <ModalSwiper name='1. Виртуальное краеведческое ориентирование «1160 лет городу Полоцку»' href='' data={data} /> </div>
        <div><ModalComponent name='2. Турнир знатоков «Тайны полоцкой истории»' href={p2} /></div>
        <div> <ModalComponent name='3. Буктрейлер к роману Т.Хаткевича «Песня Двины»' href='https://drive.google.com/file/d/1uouBiIvedoGWXA7XPySB-rIHR3KRoNuO/preview' /></div>
      </div >
    </div >
  );
}

export default p4;
