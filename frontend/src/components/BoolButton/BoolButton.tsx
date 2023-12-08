import React, { FC } from 'react';

import './BoolButton.css'

interface Props {
    falseText: string;
    trueText: string;
    value: boolean;
    onValueChange: (newValue: boolean) => void;
    className?: string,
}

const BoolButton: FC<Props> = ({ falseText, trueText, value, onValueChange, className }) => {
    return (
        <button className={'bool-button ' + (value ? 'positive' : 'negative') + " " + className} onClick={() => onValueChange(!value)}>
            { value ? trueText : falseText }
        </button>
    )
}

export default BoolButton;
