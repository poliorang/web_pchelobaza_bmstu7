import React, { useEffect, useState } from 'react';
import { RequestBusiness } from "../../../../model/business/request/RequestBusiness";
import { RequestController } from "../../../../controller/request/RequestController";
import { useAuthData } from "../../../../hooks/auth-data.hook";
import { useNavigate } from "react-router";

import './RequestsTable.css';

const RequestsTable = () => {

    const {token} = useAuthData()

    const [array, setArray] = useState(Array<RequestBusiness>);

    const getRequests = () => {
        new RequestController().getRequests({
            login: "",
            limit: 10_000,
            skipped: 0,
            token: token
        }).then(
            array => {
                setArray(array)
            }
        )
    };

    const navigate = useNavigate();

    useEffect(() => {
        getRequests();
    }, [])

    const updateReq = (login: string, description: string, status: string) => {
        new RequestController().updateRequest(token, {
            login: login,
            description: description,
            status: status
        }).then(res => {
            if (res.ok) {
                getRequests();
            } else {
                window.alert('Произошла ошибка')
            }
        })
    };

    return (
        <div className="farms-table">
            {
                array.map((req) => (
                    <div className="farm-card card request-icon" key={req.getLogin()}>
                        <div>
                            <h2>{ req.getLogin() }</h2>
                            <p>{ req.getDescription() }</p>
                        </div>

                        <div className="req-actions">
                            <button className="small-button" onClick={() => navigate(`/user-profile/${req.getLogin()}`)}>view profile</button>

                            { req.getStatus() === "waiting" &&                             <div>
                                <button className="small-button" onClick={() => updateReq(req.getLogin(), req.getDescription(), 'rejected')}>decline</button>
                                <button className="small-button" onClick={() => updateReq(req.getLogin(), req.getDescription(), 'approve')}>approve</button>
                            </div>
 }
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default RequestsTable;
