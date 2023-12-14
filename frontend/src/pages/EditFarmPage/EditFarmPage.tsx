import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router";
import { useAuthData } from "../../hooks/auth-data.hook";
import { CreateHoneyDto } from "../../dto/CreateHoneyDto";
import { HoneyBusiness } from "../../model/business/honey/HoneyBusiness";
import { FarmController } from "../../controller/farm/FarmController";
import { HoneyController } from "../../controller/honey/HoneyController";
import Header from "../../components/Header/Header";
import FieldWithLabel from "../../components/FieldWithLabel/FieldWithLabel";
import BoolButton from "../../components/BoolButton/BoolButton";
import HoneyTable from "../CreateFarmPage/components/HoneyTable/HoneyTable";

interface RouteParams {
    farmName: any;
    [key: string]: string;
}

const EditFarmPage: FC = () => {
    const { farmName } = useParams<RouteParams>()

    const navigate = useNavigate();

    const {login, token} = useAuthData();

    const [nameText, setNameText] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    const [addressText, setAddressText] = useState("");
    const [id, setId] = useState(0)

    const [honeys, setHoneys] = useState(Array<HoneyBusiness>);

    const [selectedHoneys, setSelectedHoneys] = useState(Array<CreateHoneyDto>);

    const handleButtonClickAddHoney = (honey: HoneyBusiness) => {
        const contains = Boolean(selectedHoneys.find(h => h.name === honey.getName()));

        if (contains) {
            setSelectedHoneys(prev => prev.filter(h => h.name !== honey.getName()))
        } else {
            setSelectedHoneys(prev => [...prev, {
                honeyId: honeys.find(h => h.getName() === honey.getName())!.getId(),
                name: honey.getName(),
                description: honey.getDescription(),
            }])

        }
    };

    const getFarm = async () => {
        if (!farmName) {
            return;
        }

        try {
            await new FarmController().getConcreteFarm(farmName, token)
            .then(
                farm => {
                    setNameText(farm.getName());
                    setDescriptionText(farm.getDescription());
                    setAddressText(farm.getAddress());
                    setId(farm.getId())

                    farm.getHoneys().forEach(honey => {
                        handleButtonClickAddHoney(honey);
                    })
                }
            )
        } catch (err) {
            window.alert("Произошла ошибка");
        }
    };

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

    useEffect(() => {
        if (token && farmName) {
            getHoneys();
        }
    }, [token, farmName])

    useEffect(() => {
        if (honeys.length > 0) {
            getFarm();
        }
    }, [honeys])


    const updateFarm = async () => {
        const honeyRes: CreateHoneyDto[] = [];

        Array.from(new Set([...selectedHoneys.map(h => h.honeyId)])).forEach(honeyId => {
            const h = selectedHoneys.find(h => h.honeyId === honeyId);
            honeyRes.push(h!);
        })

        try {
            await new FarmController().updateFarm(farmName!, token, {
                farmId: id,
                name: nameText,
                description: descriptionText,
                address: addressText,
                userLogin: "",
                userId: 0,
                honey: honeyRes
            }).then((res) => {
                if (res.ok) {
                    navigate('/profile');
                } else {
                    window.alert("Произошла ошибка")
                }
            })
        } catch (err) {
            window.alert("Произошла ошибка")
        }
    };

    return (
        <div className="create-farm-page">
            <Header>
                <button className="large-button" onClick={updateFarm}>save</button>
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
                            value={Boolean(selectedHoneys.find(h => h.name === honey.getName()))}
                            onValueChange={() => handleButtonClickAddHoney(honey)}
                            className="small"
                        />
                    ))}
                </div>
            </div>

            < HoneyTable selectedHoneys={ selectedHoneys } />
        </div>
    );
};

export default EditFarmPage;
