import React from "react";
import p2bg from "../img/p2bg.jpg";
import BackArrow from "./backarrow";
import ModalComponent from "./ModalComponent";
import A3 from "../img/a3.docx";
import { Button } from "@chakra-ui/react";

function p2() {
  return (
    <div
      className="p"
      style={{
        background: `url('${p2bg}')`,
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
            fontSize: "5rem",
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
        <div>
          <Button color="#782304">
            <a href="http://genocide.sava.site/" target="_blank">
              1. Сайт «Живая память прошлого»
            </a>
          </Button>
        </div>
        <div>
          <ModalComponent
            name="2. Ролик социальной направленности «Подари мечте крылья»"
            href="https://drive.google.com/file/d/1Ih_LiRwi5fsNAQGe0oVf_ZYXOi6NktKF/preview"
          />
        </div>
        <div>
          <Button color="#782304">
            <a href={A3}>
              3. Разговор на равных «Опасности, подстерегающие современную
              молодежь»
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default p2;
