import React, {useState} from "react";
import {HoneyBusiness} from "../model/business/honey/HoneyBusiness";
import {HoneyController} from "../controller/honey/HoneyController";

function HoneyInfoWidget() {
    const [token, setToken] = useState("");

    const [arrayHoney, setHoneys] = useState(Array<HoneyBusiness>);
    const handleButtonClick = () => {
        new HoneyController().getHoneys(token).then(
            array => {
                setHoneys(array)
            }
        )
    };

    return (
        <div>
            <h2>Получение информации о всех видах меда</h2>
            <span>Токен пользователя: </span>
            <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            /><br/>
            <button onClick={handleButtonClick}>Get honeys</button><br/>
            <div>
                {arrayHoney.map(el => {
                    return <div>
                        <h4>Id меда: {el.getId()}</h4>
                        <div>Имя меда: {el.getName()}</div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default HoneyInfoWidget;