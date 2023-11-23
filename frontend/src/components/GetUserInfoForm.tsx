import React, {useState} from 'react';
import {UserController} from "../controller/user/UserController";

function UserGetInfoForm() {
    const [loginRq, setLoginRq] = useState("");
    const [token, setToken] = useState("");

    const [id, setId] = useState("");
    const [loginRs, setLoginRs] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [contact, setContact] = useState("");
    const [regDate, setRegDate] = useState("");
    const [role, setRole] = useState("");
    const handleButtonClick = () => {
        setId("Loading...")
        setLoginRs("Loading...")
        setName("Loading...")
        setSurname("Loading...")
        setContact("Loading...")
        setRegDate("Loading...")
        setRole("Loading...")
        new UserController().getUser(loginRq, token).then(
            user => {
                setId(user.getId().toString())
                setLoginRs(user.getLogin())
                setName(user.getName())
                setSurname(user.getSurname())
                setContact(user.getContact())
                setRegDate(user.getRegDate())
                setRole(user.getRole())
            }
        )
    };

    return (
        <div>
            <h2>Форма получения информации о пользователе</h2>
            <span>Логин: </span>
            <input
                type="text"
                value={loginRq}
                onChange={(e) => setLoginRq(e.target.value)}
            /><br/>
            <span>Токен: </span>
            <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            /><br/>
            <button onClick={handleButtonClick}>Get Info</button><br/>
            <span>Идентификатор: </span>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            /><br/>
            <span>Логин: </span>
            <input
                type="text"
                value={loginRs}
                onChange={(e) => setLoginRs(e.target.value)}
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
            <span>Дата регистрации: </span>
            <input
                type="text"
                value={regDate}
                onChange={(e) => setRegDate(e.target.value)}
            /><br/>
            <span>Роль: </span>
            <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            /><br/>
        </div>
    );
}

export default UserGetInfoForm;