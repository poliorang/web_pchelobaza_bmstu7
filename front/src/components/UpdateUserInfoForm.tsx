import React, {useState} from 'react';
import {UserController} from "../controller/user/UserController";

function EditUserInfoForm() {
    const [token, setToken] = useState("");
    const [id, setId] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [contact, setContact] = useState("");

    const handleButtonClick = () => {
        new UserController().updateUser(
            token, {
                userId: Number(id),
                login: login,
                password: password,
                name: name,
                surname: surname,
                contact: contact
            }
        )
    };

    return (
        <div>
            <h2>Форма изменения информации о пользователе</h2>
            <span>Токен: </span>
            <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            /><br/>
            <span>Идентификатор: </span>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            /><br/>
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
            <button onClick={handleButtonClick}>Change info</button><br/>
        </div>
    );
}

export default EditUserInfoForm;