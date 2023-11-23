import React, {useState} from 'react';
import {CreateHoneyDto} from "../dto/CreateHoneyDto";
import {FarmController} from "../controller/farm/FarmController";

function CreateFarmWidget() {
    const [tokenText, setTokenText] = useState("");
    const [idText, setIdText] = useState("");
    const [nameText, setNameText] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    const [addressText, setAddressText] = useState("");
    const [loginText, setLoginText] = useState("");
    const [userIdText, setUserIdText] = useState("");



    const [honeyIdInputText, setHoneyIdInputText] = useState("");
    const [honeyNameInputText, setHoneyNameInputText] = useState("");
    const [honeyDescriptionInputText, setDescriptionInputText] = useState("");
    const [arrayHoneys, setHoneys] = useState(Array<CreateHoneyDto>);

    const handleButtonClickAddHoney = () => {
        arrayHoneys.push({
            honeyId: Number(honeyIdInputText),
            name: honeyNameInputText,
            description: honeyDescriptionInputText
        })
        setHoneys(arrayHoneys)
    };

    const handleButtonClickCreateOrder = () => {
        new FarmController().createFarm(tokenText, {
            farmId: Number(idText),
            name: nameText,
            description: descriptionText,
            address: addressText,
            userLogin: loginText,
            userId: Number(userIdText),
            honey: arrayHoneys
        })
    };

    return (
        <div>
            <h2>Форма создания медоварни</h2>
            <span>Токен пользователя: </span>
            <input
                type="text"
                value={tokenText}
                onChange={(e) => setTokenText(e.target.value)}
            /><br/>
            <span>Идентификатор: </span><input type="text" value={idText} onChange={(e) => setIdText(e.target.value)} /><br/>
            <span>Имя: </span><input type="text" value={nameText} onChange={(e) => setNameText(e.target.value)} /><br/>
            <span>Описание: </span><input type="text" value={descriptionText} onChange={(e) => setDescriptionText(e.target.value)} /><br/>
            <span>Адрес: </span><input type="text" value={addressText} onChange={(e) => setAddressText(e.target.value)} /><br/>
            <span>Логин пользователя: </span><input type="text" value={loginText} onChange={(e) => setLoginText(e.target.value)} /><br/>
            <span>Идентификатор пользователя: </span><input type="text" value={userIdText} onChange={(e) => setUserIdText(e.target.value)} /><br/>
            <span>Мед в ферме: </span><br/>
            <span>Идентификатор: </span>
            <input
                type="text"
                value={honeyIdInputText}
                onChange={(e) => setHoneyIdInputText(e.target.value)}
            />
            <span>Имя: </span>
            <input
                type="text"
                value={honeyNameInputText}
                onChange={(e) => setHoneyNameInputText(e.target.value)}
            />
            <span>Описание: </span>
            <input
                type="text"
                value={honeyDescriptionInputText}
                onChange={(e) => setDescriptionInputText(e.target.value)}
            /><br/>
            <button onClick={handleButtonClickAddHoney}>Add Honey</button><br/>
            <div>
                { arrayHoneys.length > 0 ? <h4>Виды меда, производимые медоварней:</h4> : null }
                {arrayHoneys.map(honey => {
                    return (<div>id меда: {honey.honeyId}</div>)
                })}
            </div>
            <button onClick={handleButtonClickCreateOrder}>Create farm</button><br/>
        </div>
    );
}

export default CreateFarmWidget;