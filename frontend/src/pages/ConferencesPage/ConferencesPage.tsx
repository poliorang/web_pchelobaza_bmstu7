import React, { FC, useEffect, useState } from 'react';

import './ConferencesPage.css';
import { ConferenceBusiness } from "../../model/business/conference/ConferenceBusiness";
import { ConferenceController } from "../../controller/conference/ConferenceController";
import { useAuthData } from "../../hooks/auth-data.hook";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import ConferenceCard from "./components/ConferenceCard/ConferenceCard";
import BeemasterForm from "../../components/BeemasterForm/BeemasterForm";
import { useNavigate } from "react-router";

const ConferencesPage: FC = () => {

    const { token, login, isBeemaster } = useAuthData();

    const [conferences, setConferences] = useState(Array<ConferenceBusiness>);

    const getConferences = () => {
        new ConferenceController().getAllConferences(token, "1000", "0").then(
            array => {
                setConferences(array)
            }
        ).catch();
    };

    useEffect(() => {
        if (token && login) {
            getConferences();
        }
    }, [token, login])

    const navigate = useNavigate();


    return (
        <div className="soty-bg">
            <Header>
                <Link to="/main">main</Link>
                <Link to="/profile">profile</Link>
                { isBeemaster &&  <button className="large-button" onClick={() => navigate('/create-conference')}>create</button> }
            </Header>

            <div className="conferences-table">
                { conferences.map(conference => <ConferenceCard conference={conference} />) }
            </div>

            <BeemasterForm />
        </div>
    );
};

export default ConferencesPage;
