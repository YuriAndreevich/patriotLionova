import React from "react";
import p2bg from "../img/p2bg.jpg";
import MButton from "./button";


function p2() {
  return (
    <div  className='p' style={{background: `url('${p2bg}')`,  backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'}}>
      <div className="p-content">
        <p
          style={{
            color: "#782304",
            textAlign: "center",
            fontSize: "6rem",
            padding: "30px",
          }}
        >
          АКТИВНАЯ ЖИЗНЕННАЯ ПОЗИЦИЯ
        </p>
        <p className="p-content-stix">
          <strong>Мы - новое поколение,</strong>
        </p>
        <p className="p-content-stix">
          <strong> Мы выдвигаем свои решения!</strong>
        </p>

        <p className="p-content-italic">
          Формирование устойчивого интереса к явлениям окружающей жизни, желание
          сделать окружающее пространство лучше.
        </p>
        <p className="p-content-meop">
          «АКТИВНАЯ ЖИЗНЕННАЯ ПОЗИЦИЯ» - мероприятия блока дают возможность
          участникам проявить себя в различных социальных ролях.
        </p>
<MButton>1. Сайт «Живая память прошлого»</MButton>
          <MButton> 2. Ролик социальной направленности «Подари мечте крылья»</MButton>
          <MButton> 3. Разговор на равных «Опасности, подстерегающие современную молодежь»</MButton>

      </div>
    </div>
  );
}

export default p2;
