import React, { FC, useEffect, useState } from 'react';
import { ConferenceBusiness } from "../../model/business/conference/ConferenceBusiness";
import { ConferenceController } from "../../controller/conference/ConferenceController";
import { useAuthData } from "../../hooks/auth-data.hook";
import { useNavigate, useParams } from "react-router";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

import './ConcreteConferencePage.css';
import FieldWithLabel from "../../components/FieldWithLabel/FieldWithLabel";
import ConferenceParticipant from "./components/ConferenceParticipant/ConferenceParticipant";
import ConferenceReview from "./components/ConferenceReview/ConferenceReview";
import BoolButton from "../../components/BoolButton/BoolButton";
import { UserBusinessModel } from "../../model/business/user/UserBusinessModel";

interface RouteParams {
    name: string;
    [key: string]: string;
}

const ConcreteConferencePage: FC = () => {

    const navigate = useNavigate();

    const { token } = useAuthData()
    const { name } = useParams<RouteParams>()
    let [conference, setConference] = useState<ConferenceBusiness | undefined>();

    const { login } = useAuthData();

    const [participants, setParticipants] = useState(Array<UserBusinessModel>);
    const [alreadyParticipate, setAlreadyParticipate] = useState(false)

    const getConference = async () => {
        try {
            await new ConferenceController().getConference(token, name!).then(
                it => {
                    setConference(it)
                }
            )
        } catch (err) {
            window.alert("Произошла ошибка");
        }
    };

    const getParticipants = async () => {
        try {
            await new ConferenceController().getParticipantConference(token, name!).then(
                array => {
                    setParticipants(array)

                    console.log(array, Boolean(array.find(p => p.getLogin() === login)));
                    

                    setAlreadyParticipate(
                        Boolean(array.find(p => p.getLogin() === login))
                    )
                }
            )
        } catch (err) {
             window.alert("Произошла ошибка");
        }
    };

    useEffect(() => {
        if (token && name) {
            getConference();

            getParticipants();
        }
    }, [token, name])

    if (!conference) {
        return null;
    }

    const date = new Date(conference.getDate())
    const time = date.getHours() + ":" + date.getMinutes().toString().padStart(2, "0")


    const changeParticipate = () => {
        if (!alreadyParticipate) {
            new ConferenceController().updateParticipantConference(token, name!).then(res => {
                if (!res.ok) {
                    window.alert('Не удалось записаться на конференцию');
                } else {
                    getParticipants();
                }
            })
        } else {
            // new ConferenceController().
        }
    }

    return (
        <div className="conference-page">
            <Header>
                <Link to="/main">main</Link>
                <Link to="/profile">profile</Link>
                <Link to="/conferences">conferences</Link>
                <BoolButton falseText="participating" trueText="participate" value={!alreadyParticipate} onValueChange={changeParticipate} />
            </Header>

            <div className="conference-info-wrapper">
                <div className="column conference">
                    <div className="conference-info card">
                        <FieldWithLabel label="name" value={conference.getName()} />
                        <FieldWithLabel label="address" value={conference.getAddress()} />
                        <FieldWithLabel label="date" value={new Date(conference.getDate()).toLocaleDateString().toString()} />
                        <FieldWithLabel label="time" value={time} />
                        <FieldWithLabel label="maximum participants" value={conference.getMaxUsers().toString()} />
                        <FieldWithLabel label="participants now" value={participants.length.toString()} />
                    </div>

                    <div className="conference-login card">
                        <FieldWithLabel label="owner" value={conference.getOwner()} />
                        <button className="small-button" onClick={() => navigate(`/user-profile/${conference!.getOwner()}`)}>view profile</button>
                    </div>
                </div>

                <div className="column conference">
                    <div className="conference-description card">
                        <h2>{conference.getName()}</h2>
                        <p>{conference.getDescription()}</p>
                    </div>
                </div>
            </div>

            <div className="conference-additional">
                <ConferenceParticipant users={participants} conferenceName={conference.getName()} />

                <ConferenceReview conferenceName={conference.getName()} />
            </div>

        </div>
    );
};

export default ConcreteConferencePage;
