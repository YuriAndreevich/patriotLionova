import React from 'react'
import arrowIMG from '../../img/arrow.svg'
import { useNavigate } from 'react-router-dom';

function Backarrow() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <img src={arrowIMG} alt='' style={{ position: 'absolute', height: '50px', margin: '30px 0 0 30px' }} onClick={goBack} />
    )
}

export default Backarrow