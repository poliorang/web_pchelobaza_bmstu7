import React, { FC } from 'react';

import './FieldWithLabel.css';

interface Props {
    value: string;
    label: string;
}

const FieldWithLabel: FC<Props> = ({ label, value }) => {
    return (
        <div className="field">
            <p className="field-label">{label}</p>
            <p className="field-value">{value}</p>
        </div>
    );
};

export default FieldWithLabel;
