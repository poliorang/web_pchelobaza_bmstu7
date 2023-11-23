import React, {useState} from "react";
import {ConferenceBusiness} from "../model/business/conference/ConferenceBusiness";
import {ConferenceController} from "../controller/conference/ConferenceController";

function GetConferenceWidget() {
    const [token, setToken] = useState("");
    const [limit, setLimit] = useState("");
    const [skipped, setSkipped] = useState("");

    const [arrayConference, setConferences] = useState(Array<ConferenceBusiness>);
    const handleButtonClick = () => {
        new ConferenceController().getAllConferences(token, limit, skipped).then(
            array => {
                setConferences(array)
            }
        )
    };

    return (
        <div>
            <h2>Получение информации о конференциях</h2>
            <span>Токен пользователя: </span>
            <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            /><br/>
            <span>Лимит: </span>
            <input
                type="text"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
            /><br/>
            <span>Пропустить: </span>
            <input
                type="text"
                value={skipped}
                onChange={(e) => setSkipped(e.target.value)}
            /><br/>
            <button onClick={handleButtonClick}>Get conferences</button><br/>
            <div>
                {arrayConference.map(el => {
                    return <div>
                        <div>Имя конференции: {el.getName()}</div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default GetConferenceWidget;