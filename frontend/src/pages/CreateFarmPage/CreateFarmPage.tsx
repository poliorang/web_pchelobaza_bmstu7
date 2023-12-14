import React, { useEffect, useState } from 'react';

import './CreateFarmPage.css'
import HoneyTable from "./components/HoneyTable/HoneyTable";
import Header from "../../components/Header/Header";
import FarmsTable from "../ProfilePage/components/FarmsTable/FarmsTable";
import { CreateHoneyDto } from "../../dto/CreateHoneyDto";
import { FarmController } from "../../controller/farm/FarmController";
import { useAuthData } from "../../hooks/auth-data.hook";
import { HoneyBusiness } from "../../model/business/honey/HoneyBusiness";
import { HoneyController } from "../../controller/honey/HoneyController";
import BoolButton from "../../components/BoolButton/BoolButton";
import FieldWithLabel from "../../components/FieldWithLabel/FieldWithLabel";
import { useNavigate } from "react-router";
import { useDraft } from '../../hooks/draft.hook';

interface FarmDraft {
    nameText: string;
    descriptionText: string;
    addressText: string;
    selectedHoneys: CreateHoneyDto[];
}

const CreateFarmPage = () => {

    const navigate = useNavigate();

    const {login, token, userId} = useAuthData();

    const [nameText, setNameText] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    const [addressText, setAddressText] = useState("");

    const [selectedHoneys, setSelectedHoneys] = useState(Array<CreateHoneyDto>);

    const { saveDraft, getDraft, clearDraft } = useDraft<FarmDraft>(login + ':bee:farm');

    useEffect(() => {
        const draft = getDraft();

        if (!draft) {
            return;
        }

        setNameText(draft.nameText);
        setDescriptionText(draft.descriptionText);
        setAddressText(draft.addressText);
        setSelectedHoneys(draft.selectedHoneys);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            saveDraft({
                nameText,
                addressText,
                descriptionText,
                selectedHoneys
            })
        }, 500)
    }, [nameText, addressText, descriptionText, selectedHoneys])

    const handleButtonClickAddHoney = (honey: HoneyBusiness) => {
        const contains = Boolean(selectedHoneys.find(h => h.honeyId === honey.getId()));

        if (contains) {
            setSelectedHoneys(prev => prev.filter(h => h.honeyId !== honey.getId()))
        } else {
            setSelectedHoneys(prev => [...prev, {
                honeyId: honey.getId(),
                name: honey.getName(),
                description: honey.getDescription(),
            }])
        }
    };

    const handleButtonClickCreateOrder = async () => {
        try {
            await new FarmController().createFarm(token, {
            farmId: Date.now(),
            name: nameText,
            description: descriptionText,
            address: addressText,
            userLogin: login,
            userId: Number(userId),
            honey: selectedHoneys
        }).then((res) => {
            if (res.ok) {
                navigate('/profile');
                clearDraft();
            } else {
                window.alert('Произошла ошибка');
            }});
        } catch (err) {
            window.alert('Произошла ошибка');
        }
    };

    const [honeys, setHoneys] = useState(Array<HoneyBusiness>);

    const getHoneys = () => {
        new HoneyController().getHoneys(token).then(
            array => {
                setHoneys(array)
            }
        ).catch()
    };

    useEffect(() => {
        if (token) {
            getHoneys();
        }
    }, [token])


    return (
        <div className="create-farm-page">
            <Header>
                <button className="large-button" onClick={handleButtonClickCreateOrder}>save</button>
            </Header>

            <div className="profile-info">
                <div className="farm-info-column">
                    <div className="farm-info card">
                        <div className="contacts-field">
                            <span>name</span>
                            <input type="text" className="input-field" value={nameText} onChange={e => setNameText(e.target.value)} />
                        </div>

                        <div className="contacts-field">
                            <span>address</span>
                            <input type="text" className="input-field" value={addressText} onChange={e => setAddressText(e.target.value)} />
                        </div>
                    </div>

                    <div className="farm-login card">
                        <FieldWithLabel value={login} label="login" />
                    </div>

                    <div className="farm-description card">
                        <div className="contacts-field">
                            <h2>{nameText || "<name>"}</h2>
                            <textarea value={descriptionText} onChange={e => setDescriptionText(e.target.value)} placeholder="Description"></textarea>
                        </div>
                    </div>
                </div>

                <div className="honey-select-column card honey-icon">
                    <h2>Types of honey</h2>
                    {honeys.map(honey => (
                        <BoolButton
                            key={honey.getId()}
                            falseText={honey.getName()} trueText={honey.getName()}
                            value={Boolean(selectedHoneys.find(h => h.honeyId === honey.getId()))}
                            onValueChange={() => handleButtonClickAddHoney(honey)}
                            className="small"
                        />
                    ))}
                </div>
            </div>

            < HoneyTable selectedHoneys={ selectedHoneys } />
            {/* <HoneyTable /> */}
        </div>
    );
};

export default CreateFarmPage;
