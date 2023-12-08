import React, { FC } from 'react';

import './FieldWithLabel.css';

interface Props {
    value: string;
    label: string;
    onChange: (v: string) => void;
    type?: string;
    isReadOnly?: boolean
}

const InputWithLabel: FC<Props> = ({ label, value, onChange, type = 'text', isReadOnly = false }) => {
    return (
        <div className="field">
            <p className="field-label">{label}</p>
            <input type={type} value={value} onChange={e => onChange(e.target.value)} className="input-field" readOnly={isReadOnly} />
        </div>
    );
};

export default InputWithLabel;
