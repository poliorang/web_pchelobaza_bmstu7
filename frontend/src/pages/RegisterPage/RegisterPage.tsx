import React, {useState} from 'react';
import { AuthController } from "../../controller/auth/AuthController";

import './RegisterPage.css'
import { useToken } from "../../hooks/token.hook";
import { useNavigate } from "react-router";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/login.hooks";
import { useUser } from "../../hooks/user.hook";
import { jwtDecode } from "jwt-decode";


const RegisterPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [confimPassword, setConfimPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [contact, setContact] = useState("");
    const [outputText, setOutputText] = useState("-");

    const navigate = useNavigate();

    const { setToken } = useToken();
    const { setLogin: saveLogin } = useLogin();
    const { setUser } = useUser();

    const handleButtonClick = () => {
        if (
            !login
            || !password
            || !confimPassword
            || !name
            || !surname
            || !contact
        ) {
            window.alert("Все поля должны быть заполнены");
            return;
        }

        if (!contact.match(/\S+@\S+\.\S+/)) {
            window.alert("Введен email неверного формата");
            return;
        }

        setOutputText("Loading...")
        new AuthController().signup({
            login: login,
            password: password,
            confirmPassword: confimPassword,
            name: name,
            surname: surname,
            contact: contact
        }).then(
            result => {
                const tokenData: any = jwtDecode(result);

                setToken(result);
                navigate('/main')

                setToken(result)
                saveLogin(login)
                setUser({
                    id: tokenData.id,
                    role: tokenData.role,
                });
            }
        ).catch(() => {
            window.alert("Произошла ошибка");
        })
    };
    return (
        <div className="login-page">
            <Header>
                <Link to="/login">login</Link>
                <Link to="/register">register</Link>
            </Header>

            <div className="login-form">
                <div className="register-wrapper">
                    <div className="register-column">
                        <input
                            type="text"
                            className="text-field"
                            value={name}
                            placeholder="name"
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="text"
                            className="text-field"
                            value={login}
                            placeholder="login"
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>

                    <div className="register-column">
                        <input
                            type="text"
                            className="text-field"
                            value={surname}
                            placeholder="surname"
                            onChange={(e) => setSurname(e.target.value)}
                        />

                        <input
                            type="text"
                            className="text-field"
                            value={password}
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="register-column">
                        <input
                            type="text"
                            className="text-field"
                            value={contact}
                            placeholder="contact"
                            onChange={(e) => setContact(e.target.value)}
                        />

                        <input
                            type="text"
                            className="text-field"
                            value={confimPassword}
                            placeholder="confim"
                            onChange={(e) => setConfimPassword(e.target.value)}
                        />
                    </div>
                </div>

                <button className="large-button" onClick={handleButtonClick}>
                    register
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;
