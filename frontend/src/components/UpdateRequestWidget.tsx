import React, {useState} from "react";
import {RequestController} from "../controller/request/RequestController";

function UpdateRequestWidget() {
    const [token, setToken] = useState("");
    const [login, setLogin] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");

    const handleButtonClick = () => {
        new RequestController().updateRequest(token, {
            login: login,
            description: description,
            status: status
        })
    };

    return (
        <div>
            <h2>Форма обновления заявки</h2>
            <span>Токен пользователя: </span>
            <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            /><br/>
            <span>Логин: </span>
            <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
            /><br/>
            <span>Описание: </span>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            /><br/>
            <span>Статус: </span>
            <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            /><br/>
            <button onClick={handleButtonClick}>Create</button><br/>
        </div>
    );
}

export default UpdateRequestWidget;