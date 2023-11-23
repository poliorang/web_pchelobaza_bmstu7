
import {ConferenceBusiness} from "../../model/business/conference/ConferenceBusiness";
import {ReviewBusiness} from "../../model/business/review/ReviewBusiness";
import { UserBusinessModel } from "../../model/business/user/UserBusinessModel";
import {ReviewDatabase} from "../../model/database/review/ReviewDatabase";

export interface ConferenceService {
    getAllConferences(token: string, limit: string, skipped: string): Promise<Array<ConferenceBusiness>>
    getConference(token: string, name: string): Promise<ConferenceBusiness>
    createNewConference(token: string, conference: ConferenceBusiness): void
    updateConferenceInfo(token: string, conference: ConferenceBusiness): void

    getParticipantConference(token: string, name: string): Promise<Array<UserBusinessModel>>
    updateParticipantConference(token: string, name: string): void

    getReviews(token: string, name: string): Promise<Array<ReviewBusiness>>
    createReview(token: string, name: string, review: ReviewBusiness): void
}