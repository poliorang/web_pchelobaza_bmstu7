import React, { FC, useState } from 'react';
import beeImage from '../../assets/beeman-bee.png'

import './BeemasterForm.css';
import { RequestController } from "../../controller/request/RequestController";
import { useAuthData } from "../../hooks/auth-data.hook";

const BeemasterForm: FC = () => {

    const {token, login, isBeeman} = useAuthData();

    const [description, setDescription] = useState("");

    const handleButtonClick = () => {
        if (!description) {
            return;
        }

        new RequestController().createRequest(token, {
            login: login,
            description: description,
            status: ""
        }).then((res) => {
            if (res.ok) {
                setDescription("")
                window.alert("Заявка отправлена")
            } else {
                if (res.status === 409) {
                    window.alert("Вы уже отправили заявку")
                } else {
                    window.alert("Произошла ошибка")
                }
            }
        });
    };

    if (!isBeeman) {
        return null;
    }

    return (
        <div className="beemaster-form" id="beemaster">
            <div className="beemaster-form-info card">
                <h2>Become a beemaster!</h2>
                <p>The master is an elite beeman who has the opportunity to create his own conferences</p>
                <img src={beeImage} alt="bee" className="bee-image" />
            </div>

            <div className="beemaster-form-input card">
                <div className="beemaster-form-header">
                    <h2>Write to us to become a <br /> beemaster</h2>
                    <button className="small-button" onClick={handleButtonClick}>join</button>
                </div>

                <textarea placeholder="Type here |" value={description} onChange={e => setDescription(e.target.value)}>
                </textarea>
            </div>

        </div>
    );
};

export default BeemasterForm;
