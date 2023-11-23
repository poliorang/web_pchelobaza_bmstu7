import React, {useState} from "react";
import {RequestBusiness} from "../model/business/request/RequestBusiness";
import {RequestController} from "../controller/request/RequestController";

function RequestInfoWidget() {
    const [token, setToken] = useState("");
    const [userLogin, setUserLogin] = useState("");
    const [limit, setLimit] = useState("");
    const [skipped, setSkipped] = useState("");
    
    const [array, setArray] = useState(Array<RequestBusiness>);
    const handleButtonClick = () => {
        new RequestController().getRequests({
            login: userLogin,
            limit: Number(limit),
            skipped: Number(skipped),
            token: token
        }).then(
            array => {
                setArray(array)
            }
        )
    };

    return (
        <div>
            <h2>Получение информации о заявках пользователя</h2>
            <span>Токен пользователя: </span>
            <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            /><br/>
            <span>Логин пользователя: </span>
            <input
                type="text"
                value={userLogin}
                onChange={(e) => setUserLogin(e.target.value)}
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
            <button onClick={handleButtonClick}>Get requests</button><br/>
            <div>
                {array.map(el => {                    
                    return <div>
                        <h4>Login заявки: {el.getLogin()}</h4>
                        <div>Status заявки: {el.getStatus()}</div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default RequestInfoWidget;