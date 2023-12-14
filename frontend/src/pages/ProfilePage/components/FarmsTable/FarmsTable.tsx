import React, { FC, useEffect, useState } from 'react';

import './FarmsTable.css';
import { FarmBusiness } from "../../../../model/business/farm/FarmBusiness";
import { FarmController } from "../../../../controller/farm/FarmController";
import { useToken } from "../../../../hooks/token.hook";
import { useLogin } from "../../../../hooks/login.hooks";
import { useAuthData } from "../../../../hooks/auth-data.hook";
import { useNavigate } from "react-router";

interface Props {
    login: string;
    noCreate?: boolean;
}

const FarmsTable: FC<Props> = ({ login, noCreate }) => {
    const { login: userLogin, token } = useAuthData();

    const navigate = useNavigate();

    const [farms, setFarms] = useState(Array<FarmBusiness>);

    const getFarms = async () => {
        try {
            await new FarmController().getFarms({
                token: token,
                limit: 10_000,
                login: login,
                skipped: 0,
            }).then(
                array => {
                    setFarms(array)
                }
            ).catch(() => {
                window.alert("Ошибка получения медоварен")
            })
        } catch (err) {
            window.alert("Ошибка получения медоварен")
        }
    };

    useEffect(() => {
        if (token && login) {
            getFarms();
        }
    }, [token, login])

    const getFarmLink = (name: string) => {
        if (login === userLogin) {
            return `/edit-farm/${name}`
        }

        return `/farm/${name}`
    }

    return (
        <div className="farms-table">

            {
                !noCreate && (
                    <div className="farm-card card farm-icon">
                        <div>
                            <h2>Add your farm!</h2>
                            <p>Tell us about your farm!</p>
                        </div>
        
                        <button className="small-button create-farm-button" onClick={() => navigate('/create-farm')}>Add farm {'>'}</button>
                    </div>
                )
            }


            {
                farms.map(farm => (
                    <div className="farm-card card farm-icon" key={farm.getId()}>
                        <div>
                            <h2>{ farm.getName() }</h2>
                            <p>{ farm.getHoneys().join(", ") }</p>
                        </div>

                        <button className="small-button create-farm-button" onClick={() => navigate(getFarmLink(farm.getName()))} >read more {'>'}</button>
                    </div>
                ))
            }
        </div>
    );
};

export default FarmsTable;
