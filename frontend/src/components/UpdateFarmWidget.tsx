import React, {useState} from "react";
import {CreateHoneyDto} from "../dto/CreateHoneyDto";
import {FarmController} from "../controller/farm/FarmController";

function UpdateFarmWidget() {
    const [tokenText, setTokenText] = useState("");
    const [nameText, setNameText] = useState("");

    const [idText, setIdText] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    const [addressText, setAddressText] = useState("");

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
        new FarmController().updateFarm(nameText, tokenText, {
            farmId: Number(idText),
            name: nameText,
            description: descriptionText,
            address: addressText,
            userLogin: "",
            userId: 0,
            honey: arrayHoneys
        })
    };

    return (
        <div>
            <h2>Форма обновления информации о медоверне</h2>
            <span>Токен пользователя: </span>
            <input
                type="text"
                value={tokenText}
                onChange={(e) => setTokenText(e.target.value)}
            /><br/>
            <span>Имя медоверни: </span>
            <input
                type="text"
                value={nameText}
                onChange={(e) => setNameText(e.target.value)}
            /><br/>
            <span>Идентификатор медоварни: </span><input type="text" value={idText} onChange={(e) => setIdText(e.target.value)} /><br/>
            <span>Описание: </span><input type="text" value={descriptionText} onChange={(e) => setDescriptionText(e.target.value)} /><br/>
            <span>Адрес: </span><input type="text" value={addressText} onChange={(e) => setAddressText(e.target.value)} /><br/>
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
                { arrayHoneys.length > 0 ? <h4>Меды производимые медоварней:</h4> : null }
                {arrayHoneys.map(honey => {
                    return (<div>id меда: {honey.honeyId}</div>)
                })}
            </div>
            <button onClick={handleButtonClickCreateOrder}>Update farm</button><br/>
        </div>
    );
}

export default UpdateFarmWidget;