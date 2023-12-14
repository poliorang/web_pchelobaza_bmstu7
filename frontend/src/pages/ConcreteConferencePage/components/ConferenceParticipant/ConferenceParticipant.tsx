import React, { FC, useEffect, useState } from 'react';

import './ConferenceParticipant.css';
import { UserBusinessModel } from "../../../../model/business/user/UserBusinessModel";
import { ConferenceController } from "../../../../controller/conference/ConferenceController";
import { useAuthData } from "../../../../hooks/auth-data.hook";
import { useNavigate } from "react-router";

interface Props {
    conferenceName: string;
    users: UserBusinessModel[];
}

const ConferenceParticipant: FC<Props> = ({ conferenceName, users }) => {

    const { token } = useAuthData();

    const navigate = useNavigate();

    return (
        <div className="conference-participant-table">

            { users.map(user => (
                <div className="conference-participant card participant-icon" key={user.getId()}>
                    <h2>{user.getName()}</h2>

                    <button className="small-button" onClick={() => navigate(`/user-profile/${user.getLogin()}`)}>view profile</button>
                </div>
            )) }

        </div>
    );
};

export default ConferenceParticipant;
