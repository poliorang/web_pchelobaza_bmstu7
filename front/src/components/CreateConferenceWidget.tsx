import React, {useState} from "react";
// import {ConferenceBusiness} from "../model/business/conference/ConferenceBusiness";
import {ConferenceController} from "../controller/conference/ConferenceController";

function CreateConferenceWidget() {
    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const [owner, setOwner] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [currentUsers, setCurrentUsers] = useState("");
    const [maxUsers, setMaxUsers] = useState("");
    const [confId, setConfId] = useState("");

    const handleButtonClick = () => {
        new ConferenceController().createNewConference(token, {
            confId: Number(confId),
            name: name,
            owner: owner,
            description: description,
            date: date,
            address: address,
            currentUsers: Number(currentUsers),
            maxUsers: Number(maxUsers)
        })
    };

    return (
        <div>
            <h2>Создать конференцию</h2>
            <span>Токен пользователя: </span>
            <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            /><br/>
            <span>Название конференции: </span>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br/>
            <span>Логин владельца: </span>
            <input
                type="text"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
            /><br/>
            <span>Описание: </span>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            /><br/>
            <span>Дата: </span>
            <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            /><br/>
            <span>Адрес: </span>
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            /><br/>
            <span>Текущее количество пользователей: </span>
            <input
                type="text"
                value={currentUsers}
                onChange={(e) => setCurrentUsers(e.target.value)}
            /><br/>
            <span>Максимальное количество пользователей: </span>
            <input
                type="text"
                value={maxUsers}
                onChange={(e) => setMaxUsers(e.target.value)}
            /><br/>
            <button onClick={handleButtonClick}>Create conference</button><br/>
        </div>
    );
}

export default CreateConferenceWidget;