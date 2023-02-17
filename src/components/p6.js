import React from "react";
import "./p.scss";
import p1bg from "../img/p5bg.jpg";
import MButton from "./button";

function p6() {
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
        <p  style={{
            color: "#782304",
            textAlign: "center",
            fontSize: "6rem",
            padding: "30px",
          }}>ОТЕЧЕСТВО КАК ЦЕННОСТЬ</p>
        <p className="p-content-stix">Мы верны своей отчизне,</p>
        <p className="p-content-stix"> мы-времени новых рук!</p>
        <p className="p-content-italic">
          Повышение интереса к созидательному труду, сохранению мира,
          преумножению богатства Беларуси; повышение культуры этнических
          отношений.
        </p>
        <p className="p-content-meop">
          «ОТЕЧЕСТВО КАК ЦЕННОСТЬ» - блок, который помогает выстроить работу по
          знакомству с государственными ориентирами, идеалами Республики
          Беларусь и по их приятию; по знакомству с народами, населяющими нашу
          страну, их обычаями и традициями.
        </p>
          <MButton>  1. Актуальная папка для правового ликбеза «Сила закона»</MButton>
          <MButton> 2. Встреча-диалог культур «Нас познакомил Новополоцк»</MButton>
      </div>
    </div>
  );
}

export default p6;
