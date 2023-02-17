import React from "react";
import p4bg from "../img/p4bg.jpg";
import "./p.scss";
import MButton from "./button";

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
        <MButton>
          1. Виртуальное краеведческое ориентирование «1160 лет городу Полоцку»
        </MButton>
        <MButton> 2. Турнир знатоков «Тайны полоцкой истории»</MButton>
        <MButton> 3. Буктрейлер к роману Т.Хаткевича «Песня Двины»</MButton>
      </div>
    </div>
  );
}

export default p4;
