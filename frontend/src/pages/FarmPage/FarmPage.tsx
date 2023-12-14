import React, { FC, useEffect, useState } from 'react';

import './FarmPage.css';
import { useAuthData } from "../../hooks/auth-data.hook";
import { CreateHoneyDto } from "../../dto/CreateHoneyDto";
import { HoneyBusiness } from "../../model/business/honey/HoneyBusiness";
import { FarmController } from "../../controller/farm/FarmController";
import { HoneyController } from "../../controller/honey/HoneyController";
import Header from "../../components/Header/Header";
import BoolButton from "../../components/BoolButton/BoolButton";
import HoneyTable from "../CreateFarmPage/components/HoneyTable/HoneyTable";
import { FarmBusiness } from "../../model/business/farm/FarmBusiness";
import { useNavigate, useParams } from "react-router";
import FieldWithLabel from "../../components/FieldWithLabel/FieldWithLabel";

interface RouteParams {
    name: string;
    [key: string]: string;
}

const FarmPage: FC = () => {
    const { name } = useParams<RouteParams>()

    const navigate = useNavigate();

    const {login, token, userId} = useAuthData();

    const [nameText, setNameText] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    const [addressText, setAddressText] = useState("");
    const [loginFarm, setLoginFarm] = useState("");
    

    const [selectedHoneys, setSelectedHoneys] = useState(Array<CreateHoneyDto>);

    const handleButtonClickAddHoney = (honey: HoneyBusiness) => {
        const contains = Boolean(selectedHoneys.find(h => h.name === honey.getName()));

        if (contains) {
            setSelectedHoneys(prev => prev.filter(h => h.name !== honey.getName()))
        } else {
            setSelectedHoneys(prev => [...prev, {
                honeyId: honey.getId(),
                name: honey.getName(),
                description: honey.getDescription(),
            }])
        }
    };

    const [honeys, setHoneys] = useState(Array<HoneyBusiness>);

    const getHoneys = async () => {
        try {
            await new HoneyController().getHoneys(token).then(
                array => {
                    setHoneys(array)
                }
            ).catch()
        } catch (err) {
            window.alert("Произошла ошибка");
        }
    };

    const getFarm = async () => {
        if (!name) {
            return;
        }

        try {
            await new FarmController().getConcreteFarm(name, token)
                .then(
                    farm => {
                        setNameText(farm.getName());
                        setDescriptionText(farm.getDescription());
                        setAddressText(farm.getAddress());
                        setLoginFarm(farm.getLogin())

                        farm.getHoneys().forEach(honey => {
                            handleButtonClickAddHoney(honey);
                        })
                    }
                )
        } catch (err) {
            window.alert("Произошла ошибка");
        }
    };

    useEffect(() => {
        if (token) {
            getHoneys();
            getFarm();
        }
    }, [token])


    return (
        <div className="create-farm-page">
            <Header>

            </Header>

            <div className="profile-info">
                <div className="farm-info-column">
                    <div className="farm-info card">
                        <FieldWithLabel label="name" value={nameText} />
                        <FieldWithLabel label="address" value={addressText} />
                    </div>

                    <div className="farm-login card">
                        <FieldWithLabel value={loginFarm} label="login" />
                    </div>

                    <div className="farm-description card">
                        <div className="contacts-field">
                            <h2>{nameText || "<name>"}</h2>
                            <textarea value={descriptionText} placeholder="Description" readOnly></textarea>
                        </div>
                    </div>
                </div>

                <div className="honey-select-column card">
                    <h2>Types of honey</h2>
                    {honeys.map(honey => (
                        <BoolButton
                            key={honey.getId()}
                            falseText={honey.getName()} trueText={honey.getName()}
                            value={Boolean(selectedHoneys.find(h => h.name === honey.getName()))}
                            onValueChange={() => {}}
                            className="small"
                        />
                    ))}
                </div>
            </div>

            <HoneyTable selectedHoneys={ selectedHoneys } />
        </div>
    );
};

export default FarmPage;
