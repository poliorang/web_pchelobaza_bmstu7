import React, { FC, useEffect, useState } from 'react';

import './HoneyTable.css'
import { HoneyBusiness } from "../../../../model/business/honey/HoneyBusiness";
import { HoneyController } from "../../../../controller/honey/HoneyController";
import { useAuthData } from "../../../../hooks/auth-data.hook";
import HoneyCard from "../HoneyCard/HoneyCard";
import { CreateHoneyDto } from '../../../../dto/CreateHoneyDto';

interface Props {
    selectedHoneys: CreateHoneyDto[];
}

const HoneyTable: FC<Props> = ({ selectedHoneys }) => {
    const { token } = useAuthData();

    const [honeys, setHoneys] = useState(Array<HoneyBusiness>);

    const getHoneys = async () => {
        try {
            await new HoneyController().getHoneys(token).then(
                array => {
                    setHoneys(array)
                }
            ).catch()
        } catch (err) {
            console.log('Произошла ошибка');
        }
    };

    useEffect(() => {
        if (token) {
            getHoneys();
        }
    }, [token])

    return (
        <div className="honey-table">
            { honeys.map(honey => <HoneyCard key={honey.getId()} honey={honey} isSelected={ Boolean(selectedHoneys.find(h => h.name === honey.getName())) } />) }
        </div>
    );
}

export default HoneyTable;
