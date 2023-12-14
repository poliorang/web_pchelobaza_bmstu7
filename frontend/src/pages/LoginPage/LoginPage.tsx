import React, { useState } from 'react';
import { AuthController } from "../../controller/auth/AuthController";

import './LoginPage.css';
import { useNavigate } from "react-router";
import { useToken } from "../../hooks/token.hook";
import { useLogin } from "../../hooks/login.hooks";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/user.hook";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
    const [inputText1, setInputText1] = useState("");
    const [inputText2, setInputText2] = useState("");

    const { setToken } = useToken();
    const { setLogin } = useLogin();
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (!inputText1 || !inputText2) {
            return;
        }

        new AuthController().login(inputText1, inputText2).then(
            result => {
                const tokenData: any = jwtDecode(result);

                setToken(result)
                setLogin(inputText1)
                setUser({
                    id: tokenData.id,
                    role: tokenData.role,
                });
                navigate('/main');
            }
        ).catch(error => {
            if ((error.message as string).includes("password")) {
                window.alert("Введен неверный пароль!");
            } else {
                window.alert("Произошла ошибка");
            }           
        })
    };

    return (
        <div className="login-page">
            <Header>
                <Link to="/login">login</Link>
                <Link to="/register">register</Link>
            </Header>

            <form className="login-form" onSubmit={e => { e.preventDefault(); handleButtonClick(); }}>
                <input
                    type="text" placeholder="login" className="text-field" value={inputText1}
                    onChange={(e) => setInputText1(e.target.value)}
                />
                <input
                    type="password" placeholder="password" className="text-field" value={inputText2}
                    onChange={(e) => setInputText2(e.target.value)}
                />

                <button className="large-button" onClick={handleButtonClick} type='submit'>
                    log in
                </button>

                <button className="large-button" onClick={() => navigate('/register')}>
                    register
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
