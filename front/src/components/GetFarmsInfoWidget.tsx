import React, {useState} from "react";
import {AuthController} from "../controller/auth/AuthController";
import {UserController} from "../controller/user/UserController";
import {FarmBusiness} from "../model/business/farm/FarmBusiness";
import {FarmController} from "../controller/farm/FarmController";

function GetFarmsInfoWidget() {
    const [token, setToken] = useState("");
    const [login, setLogin] = useState("");
    const [limit, setLimit] = useState("");
    const [skipped, setSkipped] = useState("");

    const [arrayFarms, setProducts] = useState(Array<FarmBusiness>);
    const handleButtonClick = () => {
        new FarmController().getFarms({
            token: token,
            limit: Number(limit),
            login: login,
            skipped: Number(skipped)
        }).then(
            array => {
                setProducts(array)
            }
        )
    };

    return (
        <div>
            <h2>Получение информации о медоварнях</h2>
            <span>Логин пользователя: </span>
            <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
            /><br/>
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
            <button onClick={handleButtonClick}>Get farms</button><br/>
            <div>
                {arrayFarms.map(el => {
                    return <div>
                        <h4>Id фермы: {el.getId()}</h4>
                        <div>Имя фермы: {el.getName()}</div>
                        <div>
                            {el.getHoneys().map( honey => {
                                    return <div>имя меда: ${honey.getName()}</div>
                                })
                            }
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default GetFarmsInfoWidget;