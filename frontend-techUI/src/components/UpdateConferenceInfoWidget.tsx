import React, {useState} from "react";
import {ConferenceController} from "../controller/conference/ConferenceController";

function UpdateConferenceInfoWidget() {
    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [maxUsers, setMaxUsers] = useState("");
    const [confId, setConfId] = useState("");
    const handleButtonClick = () => {
        new ConferenceController().updateConferenceInfo(token, {
            confId: Number(confId),
            name: name,
            description: description,
            date: date,
            address: address,
            maxUsers: Number(maxUsers)
        })
    };

    return (
        <div>
            <h2>Изменение информации о конкретной конференции</h2>
            <span>Токен пользователя: </span>
            <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            /><br/>
            <span>Идентификатор конференции: </span>
            <input
                type="text"
                value={confId}
                onChange={(e) => setConfId(e.target.value)}
            /><br/>
            <span>Имя конференции: </span>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br/>
            <span>Описание конференции: </span>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            /><br/>
            <span>Дата конференции: </span>
            <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            /><br/>
            <span>Адресс конференции: </span>
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            /><br/>
            <span>Максимальное количество участников: </span>
            <input
                type="text"
                value={maxUsers}
                onChange={(e) => setMaxUsers(e.target.value)}
            /><br/>
            <button onClick={handleButtonClick}>Update conference info</button><br/>
        </div>
    );
}

export default UpdateConferenceInfoWidget;