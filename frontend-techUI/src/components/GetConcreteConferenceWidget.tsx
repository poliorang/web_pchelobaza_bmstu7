import React, {useState} from "react";
import {ConferenceBusiness} from "../model/business/conference/ConferenceBusiness";
import {ConferenceController} from "../controller/conference/ConferenceController";

function GetConcreteConferenceWidget() {
    const [token, setToken] = useState("");
    const [name, setName] = useState("");

    let [arrayConference, setConferences] = useState(Array<ConferenceBusiness>);
    const handleButtonClick = () => {
        new ConferenceController().getConference(token, name).then(
            it => {
                arrayConference = Array<ConferenceBusiness>()
                arrayConference.push(it)
                setConferences(arrayConference)
            }
        )
    };

    return (
        <div>
            <h2>Получение информации о конкретной конференции</h2>
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
            <button onClick={handleButtonClick}>Get conference</button><br/>
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

export default GetConcreteConferenceWidget;