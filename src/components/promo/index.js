import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
import promo from '../../assets/img/promo1.png'

const Promo = () => {
    return (
        <Link to='/' className='promo'>
            <div className='promo__title'>Скидки до 30% на сигвеи</div>
            <img alt='img' src={promo}/>
        </Link>
    );
};

export default Promo;