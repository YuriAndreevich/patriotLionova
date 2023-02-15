import React from 'react'
import { Link } from "react-router-dom";

function main() {
  return (
    <div>
        <p>Универсальный мобиль</p>
        <Link to='/patriot/p1'>П</Link><Link to='/patriot/p2'>А</Link><Link to='/patriot/p3'>Т</Link><Link to='/patriot/p4'>Р</Link><Link to='/patriot/p5'>И</Link><Link to='/patriot/p6'>О</Link><Link to='/patriot/p7'>Т</Link>
        <div><Link to='/patriot/wenewpeople'>Мы - новое поколение!</Link></div>
        </div>
  )
}

export default main