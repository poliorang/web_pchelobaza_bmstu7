import React, { FC, useState } from 'react';
import { ConferenceController } from "../../../../controller/conference/ConferenceController";
import { useAuthData } from "../../../../hooks/auth-data.hook";

import './CreateReview.css';

interface Props {
    conferenceName: string;
    onSubmit?: () => void;
}

const CreateReview: FC<Props> = ({ conferenceName, onSubmit }) => {

    const { token, login } = useAuthData();

    const [description, setDescription] = useState("");

    const createReview = async () => {
        try {
            await new ConferenceController().createReview(token, conferenceName, {
                description: description,
                login: login,
                name: "",
                surname: "",
                date: new Date().toJSON(),
            }).then(() => setDescription("")).then(() => onSubmit?.())
        } catch (err) {
            window.alert("Произошла ошибка");
        }
    };

    return (
        <div className="create-review card">
            <h2 className="card-header-black">Type here</h2>

            <textarea className="review-input" placeholder="Type here" value={description} onChange={e => setDescription(e.target.value)} />

            <button className="small-button review-submit" onClick={createReview}>save</button>
        </div>
    );
};

export default CreateReview;
