import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'


const BreadCrumbs = () => {
    return (
        <div className='breadcrumbs'>
            <li><Link to='/'>Главная</Link></li>
            <li><Link to='/'>Новости</Link></li>
        </div>
    );
};

export default BreadCrumbs;