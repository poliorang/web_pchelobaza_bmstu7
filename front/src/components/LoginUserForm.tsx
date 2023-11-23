import React, {useState} from 'react';
import {AuthController} from "../controller/auth/AuthController";

function LoginUserForm() {
    const [inputText1, setInputText1] = useState("");
    const [inputText2, setInputText2] = useState("");
    const [outputText, setOutputText] = useState("-");

    const handleButtonClick = () => {
        setOutputText("Loading...")
        new AuthController().login(inputText1, inputText2).then(
            result => {
                setOutputText(result);
            }
        ).catch(error => {
            setOutputText(`Error | ${error.message}`);
        })
    };

    return (
        <div>
            <h2>Форма авторизации пользователя</h2>
            <span>Логин: </span>
            <input
                type="text"
                value={inputText1}
                onChange={(e) => setInputText1(e.target.value)}
            /><br/>
            <span>Пароль: </span>
            <input
                type="text"
                value={inputText2}
                onChange={(e) => setInputText2(e.target.value)}
            /><br/>
            <button onClick={handleButtonClick}>Login</button><br/>
            <span>Токен: </span><input type="text" value={outputText} readOnly />
        </div>
    );
}

export default LoginUserForm;