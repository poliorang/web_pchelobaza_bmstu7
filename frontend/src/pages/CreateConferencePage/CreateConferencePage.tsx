import {FC, useState, useEffect} from 'react';
import Header from "../../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import FieldWithLabel from "../../components/FieldWithLabel/FieldWithLabel";
import { ConferenceController } from "../../controller/conference/ConferenceController";
import InputWithLabel from "../../components/FieldWithLabel/InputWithLabel";
import { useAuthData } from "../../hooks/auth-data.hook";
import {useDraft} from '../../hooks/draft.hook';

const CreateConferencePage: FC = () => {

    const {token, login} = useAuthData();

    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [date, setDate] = useState("")
    const [maximum, setMaximum] = useState("")
    const [description, setDescription] = useState("");

    const createConference = async () => {
        if (
            !name
            || !address
            || !date
            || !maximum
            || !description
        ) {
            window.alert("Все поля должны быть заполнены");
            return;
        }

        try {
            await new ConferenceController().createNewConference(token, {
                name,
                description,
                userLogin: login,
                confId: Date.now(),
                date: new Date(date).toJSON(),
                currentUsers: 0,
                address,
                maxUsers: Number(maximum)
            }).then(res => {
                if (!res.ok) {
                    window.alert("Что-то тут не так!")
                } else {
                    navigate('/conferences');
                }
            });
        } catch (err) {
            window.alert("Что-то тут не так!")
        }
    }

    return (
        <div className="conference-page">
            <Header>
                <Link to="/main">main</Link>
                <Link to="/profile">profile</Link>
                <Link to="/conferences">conferences</Link>
                <button className="large-button" onClick={createConference}>save</button>
            </Header>

            <div className="conference-info-wrapper">
                <div className="column">
                    <div className="conference-info card">
                        <InputWithLabel label="name" value={name} onChange={setName} />
                        <InputWithLabel label="address" value={address} onChange={setAddress} />
                        <InputWithLabel label="date" value={date} onChange={setDate} type="datetime-local"/>
                        <InputWithLabel
                            label="maximum participants" value={maximum} onChange={setMaximum} type="number"
                        />
                    </div>

                    <div className="conference-login card">
                        <FieldWithLabel label="owner" value={login} />
                    </div>
                </div>

                <div className="column">
                    <div className="conference-description card">
                        <h2>{name || "<name>"}</h2>
                        <textarea
                            value={description} onChange={e => setDescription(e.target.value)} placeholder="Description"
                        ></textarea>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CreateConferencePage;
