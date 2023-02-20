import React from "react";
import p2bg from "../img/p2bg.jpg";
import BackArrow from "./backarrow";
import ModalComponent from "./ModalComponent";


function p2() {
  return (
    <div className='p' style={{
      background: `url('${p2bg}')`, backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <BackArrow />
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

        <ModalComponent name='1. Сайт «Живая память прошлого»' href='' />
        <ModalComponent name='2. Ролик социальной направленности «Подари мечте крылья»' href='' />
        <ModalComponent name='3. Разговор на равных «Опасности, подстерегающие современную молодежь»' href='' />


      </div >
    </div >
  );
}

export default p2;
