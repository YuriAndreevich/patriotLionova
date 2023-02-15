import React from "react";
import { Link } from "react-router-dom";
import './main.scss'

function main() {
  return (
    <div className="main">
      <div className="main-patriot">
      
      <Link to="/patriot/p1">«П</Link>
      <Link to="/patriot/p2">А</Link>
      <Link to="/patriot/p3">Т</Link>
      <Link to="/patriot/p4">Р</Link>
      <Link to="/patriot/p5">И</Link>
      <Link to="/patriot/p6">О</Link>
      <Link to="/patriot/p7">Т:</Link>
      
      </div>
      <div className="main-patriot-desc">
        <Link to="/patriot/wenewpeople"> мы - новое поколение!»</Link>
      </div>
    </div>
  );
}

export default main;
