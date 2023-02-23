import React from 'react'
import arrowIMG from '../../img/arrow.svg'
import { useNavigate } from 'react-router-dom';
import '../../App.scss'

function Backarrow() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <img className='ArrowBack' src={arrowIMG} alt='' onClick={goBack} />
    )
}

export default Backarrow