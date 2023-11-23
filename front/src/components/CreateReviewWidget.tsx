import React, {useState} from "react";
import {ConferenceController} from "../controller/conference/ConferenceController";

function CreateReviewWidget() {
    const [token, setToken] = useState("");
    const [nameConf, setName] = useState("");
    const [name, setUserName] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const handleButtonClick = () => {
        new ConferenceController().createReview(token, nameConf, {
            description: description,
            login: "",
            name: "",
            surname: "",
            date: ""
        })
    };

    return (
        <div>
            <h2>Форма создания отзыва о концеренции</h2>
            <span>Токен пользователя: </span>
            <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            /><br/>
            <span>Название конфренции: </span>
            <input
                type="text"
                value={nameConf}
                onChange={(e) => setName(e.target.value)}
            /><br/>
            <span>Текст: </span>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            /><br/>
            <button onClick={handleButtonClick}>Create</button><br/>
        </div>
    );
}

export default CreateReviewWidget;