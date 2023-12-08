import React, {useState} from "react";
import {ReviewBusiness} from "../model/business/review/ReviewBusiness";
import {ConferenceController} from "../controller/conference/ConferenceController";

function GetReviewWidget() {
    const [token, setToken] = useState("");
    const [name, setName] = useState("");

    const [array, setArray] = useState(Array<ReviewBusiness>);
    const handleButtonClick = () => {
        new ConferenceController().getReviews(token, name).then(
            array => {
                setArray(array)
            }
        )
    };

    return (
        <div>
            <h2>Получение информации об отзывах о конференции</h2>
            <span>Токен пользователя: </span>
            <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            /><br/>
            <span>Название конференции: </span>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br/>
            <button onClick={handleButtonClick}>Get review</button><br/>
            <div>
                {array.map(el => {
                    return <div>
                        <div>Комментатор: {el.getName()}</div>
                        <div>Текст: {el.getDescription()}</div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default GetReviewWidget;