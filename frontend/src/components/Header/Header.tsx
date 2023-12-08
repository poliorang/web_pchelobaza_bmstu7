import React, { FC } from 'react';

import beeLogo from '../../assets/bee-logo.png';

import './Header.css'
import { useNavigate } from "react-router";

interface Props {
    children: React.ReactNode;
}

const Header: FC<Props> = ({ children }) => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <img src={beeLogo} alt="logo" className="header-logo" onClick={() => navigate('/main')} />


            <div className="header-links">
                {children}
            </div>
        </div>
    );
};

export default Header;
