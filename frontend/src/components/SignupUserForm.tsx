import React, {useState} from 'react';
import {AuthController} from "../controller/auth/AuthController";

function SignupUserForm() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [confimPassword, setConfimPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [contact, setContact] = useState("");
    const [outputText, setOutputText] = useState("-");

    const handleButtonClick = () => {
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
                setOutputText(result);
            }
        )
    };

    return (
        <div>
            <h2>Форма регистрации пользователя</h2>
            <span>Логин: </span>
            <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
            /><br/>
            <span>Пароль: </span>
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br/>
            <span>Пароль повторно: </span>
            <input
                type="text"
                value={confimPassword}
                onChange={(e) => setConfimPassword(e.target.value)}
            /><br/>
            <span>Имя: </span>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br/>
            <span>Фамилия: </span>
            <input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
            /><br/>
            <span>Почта: </span>
            <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
            /><br/>
            <button onClick={handleButtonClick}>Login</button><br/>
            <span>Токен: </span><input type="text" value={outputText} readOnly />
        </div>
    );
}

export default SignupUserForm;