import React from 'react'
import './card.scss'

function index({src, text}) {
  return (
    <div className='card'>
<img src={src} alt=''/>
<strong>{text}</strong>

    </div>
  )
}

export default index