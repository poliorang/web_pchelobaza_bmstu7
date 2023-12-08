import React, { FC, useEffect, useState } from 'react';
import { ReviewBusiness } from "../../../../model/business/review/ReviewBusiness";
import { ConferenceController } from "../../../../controller/conference/ConferenceController";

import './ConferenceReview.css';
import { useAuthData } from "../../../../hooks/auth-data.hook";
import CreateReview from "../CreateReview/CreateReview";

interface Props {
    conferenceName: string;
}

const ConferenceReview: FC<Props> = ({ conferenceName }) => {

    const { token } = useAuthData();

    const [array, setArray] = useState(Array<ReviewBusiness>);

    const getReviews = () => {
        new ConferenceController().getReviews(token, conferenceName).then(
            array => {
                setArray(array)
            }
        )
    };

    useEffect(() => {
        if (token) {
            getReviews();
        }
    }, [token])

    return (
        <div className="review-table">

            { array.map(review => (
                <div className="review card comment-icon" key={review.getdDate().toString()}>
                    <h2 className="card-header-black">{review.getName()}</h2>

                    <p>{review.getDescription()}</p>
                </div>
            )) }

            <CreateReview conferenceName={conferenceName} onSubmit={() => getReviews()} />
        </div>
    );
};

export default ConferenceReview;
