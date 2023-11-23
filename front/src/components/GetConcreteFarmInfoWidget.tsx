import React, {useState} from "react";
import {AuthController} from "../controller/auth/AuthController";
import {UserController} from "../controller/user/UserController";
import {FarmBusiness} from "../model/business/farm/FarmBusiness";
import {FarmController} from "../controller/farm/FarmController";

function GetConcreteFarmInfoWidget() {
    const [token, setToken] = useState("");
    const [name, setName] = useState("");

    let [arrayFarms, setProducts] = useState(Array<FarmBusiness>);
    const handleButtonClick = () => {
        new FarmController().getConcreteFarm(name, token)
        .then(
            farm => {
                arrayFarms = Array<FarmBusiness>()
                arrayFarms.push(farm)
                setProducts(arrayFarms)
            }
        )
    };

    return (
        <div>
            <h2>Получение информации о конкретной медоварне</h2>
            <span>Имя медоварни: </span>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br/>
            <span>Токен пользователя: </span>
            <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            /><br/>
            <button onClick={handleButtonClick}>Get farms</button><br/>
            <div>
                {arrayFarms.map(el => {    
                    return <div>
                        <h4>Id фермы: {el.getId()}</h4>
                        <div>Имя фермы: {el.getName()}</div>
                        <div>
                            {el.getHoneys().map( honey => {
                                return <div>имя меда: {honey.getName()}</div>
                            })
                            }
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default GetConcreteFarmInfoWidget;