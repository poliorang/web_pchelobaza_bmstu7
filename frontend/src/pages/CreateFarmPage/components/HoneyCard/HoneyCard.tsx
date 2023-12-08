import React, { FC } from 'react';

import './HoneyCard.css';
import { HoneyBusiness } from "../../../../model/business/honey/HoneyBusiness";

interface Props {
    honey: HoneyBusiness;
    isSelected: boolean;
}

const HoneyCard: FC<Props> = ({ honey, isSelected }) => {
    const classname = "honey-card card honey-icon" + (isSelected ? " selected-honey" : "")
    return (
        <div className={classname}>
            <h3>{ honey.getName() }</h3>

            <p>{ honey.getDescription() }</p>
        </div>
    );
};

export default HoneyCard;
