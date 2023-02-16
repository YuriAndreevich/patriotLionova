import React from "react";
import p4bg from "../img/p4bg.jpg";
import "./p.scss";

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
        <p           style={{
            color: "#782304",
            textAlign: "center",
            fontSize: "8.8rem",
            padding: "30px",
          }}>РОДИНА МАЛАЯ</p>
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
        <p>
          <strong>
            1. Виртуальное краеведческое ориентирование «1160 лет городу
            Полоцку»
          </strong>
        </p>
        <p>
          <strong>2. Турнир знатоков «Тайны полоцкой истории»</strong>
        </p>
        <p>
          <strong>3. Буктрейлер по роману Т.Хаткевича «Песня Двины»</strong>
        </p>
      </div>
    </div>
  );
}

export default p4;
