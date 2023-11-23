import React, {useState} from "react";
import {ConferenceController} from "../controller/conference/ConferenceController";

function UpdateParticipantConferenceWidget() {
    const [token, setToken] = useState("");
    const [name, setName] = useState("");

    const handleButtonClick = () => {
        new ConferenceController().updateParticipantConference(token, name)
    };

    return (
        <div>
            <h2>Присоединиться к конференции</h2>
            <span>Токен пользователя: </span>
            <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            /><br/>
            <span>Имя конференции: </span>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br/>
            <button onClick={handleButtonClick}>Update participant</button><br/>
        </div>
    );
}

export default UpdateParticipantConferenceWidget;