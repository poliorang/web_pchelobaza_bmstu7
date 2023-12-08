import React, { FC } from 'react';
import { ConferenceBusiness } from "../../../../model/business/conference/ConferenceBusiness";

interface Props {
    conference: ConferenceBusiness;
}

import './ConferenceCard.css'
import { useNavigate } from "react-router";

const ConferenceCard: FC<Props> = ({ conference }) => {

    const navigate = useNavigate();

    return (
        <div className="conference-card card">
            <div className="conference-card-body">
                <h3>{conference.getName()}</h3>
                <p>{conference.getDescription()}</p>
            </div>

            <button className="conference-card-button" onClick={() => navigate(`/conference/${conference.getName()}`)}>read more {'>'}</button>

        </div>
    );
};

export default ConferenceCard;
