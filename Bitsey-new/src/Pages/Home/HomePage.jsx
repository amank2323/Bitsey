//import { discoveryCards } from '../../utils/data';
import { NavLink } from 'react-router';
import './HomePage.css';
import { Header } from '../../Components/Header'
import catelogImg from '../../assets/homePage-img/catelog-img1.jpg';
import catelogImg2 from '../../assets/homePage-img/catelog-img2.jpg';
import catelogImg3 from '../../assets/homePage-img/catelog-img3.jpg'
//import { useState } from 'react';

export function HomePage() {

    return (
        <>
            <title>Bitsey - Your Shopping Destination</title>
            <Header />
            <div className='Homepage'>
                <div className="hero-container">
                    <div className='heading'>Access to high-Quality, <strong>Eco-Friendly</strong> products and services</div>
                </div>
                <NavLink to='/Products'>
                <div className="hero-images">
                        <img src={catelogImg3} alt="" />
                        <img src={catelogImg2} alt="" />
                        <img src={catelogImg} alt="" />
                </div>
                 </NavLink>
            </div>

        </>
    )
}