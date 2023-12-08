import React from 'react';
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

import sotyImage from '../../assets/soty-image.png'

import './MainPage.css'

const MainPage = () => {
    return (
        <div className="main-page">
            <Header>
                <Link to="/conferences">conferences</Link>
                <Link to="/profile">profile</Link>
            </Header>

            <img src={sotyImage} alt="soty" className="soty-image" />

            <h1 className="main-header">Ukusi menya pchela!</h1>
            <p className="main-info">We are a society of like-minded beekeepers around the world. You can tell us what kind of honey you produce, participate in a conference or create your own!</p>
        </div>
    );
};

export default MainPage;
