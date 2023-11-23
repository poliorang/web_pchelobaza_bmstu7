import React, {useState} from "react";
import {ConferenceBusiness} from "../model/business/conference/ConferenceBusiness";
import {ConferenceController} from "../controller/conference/ConferenceController";
import { UserBusinessModel } from "../model/business/user/UserBusinessModel";

function GetParticipantConferenceWidget() {
    const [token, setToken] = useState("");
    const [name, setName] = useState("");

    let [arrayUser, setUsers] = useState(Array<UserBusinessModel>);
    const handleButtonClick = () => {
        new ConferenceController().getParticipantConference(token, name).then(
            array => {
                setUsers(array)
            }
        )
    };

    return (
        <div>
            <h2>Получение информации об участниках конференции</h2>
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
            <button onClick={handleButtonClick}>Get participant</button><br/>
            <div>
                {arrayUser.map(el => {
                    return <div>
                        <div>Имя участника: {el.getName()}</div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default GetParticipantConferenceWidget;