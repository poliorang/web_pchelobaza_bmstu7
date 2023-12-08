import { UserBusinessModel } from "../../model/business/user/UserBusinessModel";
import {ConferenceDatabase} from "../../model/database/conference/ConferenceDatabase";
import {ReviewDatabase} from "../../model/database/review/ReviewDatabase";

export interface ConferenceDao {
    getAllConferences(token: string, limit: string, skipped: string): Promise<Array<ConferenceDatabase>>
    getConference(token: string, name: string): Promise<ConferenceDatabase>
    createNewConference(token: string, conference: ConferenceDatabase): void
    updateConferenceInfo(token: string, conference: ConferenceDatabase): void

    getParticipantConference(token: string, name: string): Promise<Array<UserBusinessModel>> 
    updateParticipantConference(token: string, name: string): void

    getReviews(token: string, name: string): Promise<Array<ReviewDatabase>>
    createReview(token: string, name: string, review: ReviewDatabase): void
}