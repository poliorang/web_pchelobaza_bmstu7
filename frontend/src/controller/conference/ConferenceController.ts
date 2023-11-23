import {ConferenceBusiness} from "../../model/business/conference/ConferenceBusiness";
import {ConferenceServiceImpl} from "../../service/conference/ConferenceServiceImpl";
import {ConferenceDto} from "../../dto/ConferenceDto";
import {ConferenceBusinessImpl} from "../../model/business/conference/ConferenceBusinessImpl";
import {NewConferenceParams} from "../../dto/NewConferenceParams";
import {ReviewBusiness} from "../../model/business/review/ReviewBusiness";
import {ReviewBusinessImpl} from "../../model/business/review/ReviewBusinessImpl";
import {CreateReviewDto} from "../../dto/CreateReviewDto";
import reportWebVitals from "../../reportWebVitals";
import { UserBusinessModel } from "../../model/business/user/UserBusinessModel";

export class ConferenceController {
    private conferenceService = new ConferenceServiceImpl()

    getAllConferences(token: string, limit: string, skipped: string): Promise<Array<ConferenceBusiness>> {
        return this.conferenceService.getAllConferences(token, limit, skipped)
    }

    getConference(token: string, name: string): Promise<ConferenceBusiness> {
        return this.conferenceService.getConference(token, name)
    }

    createNewConference(token: string, conference: ConferenceDto): void {
        this.conferenceService.createNewConference(token, new ConferenceBusinessImpl(
            0, conference.name, conference.owner, conference.description, conference.date, conference.address, conference.currentUsers, conference.maxUsers
        ))
    }

    updateConferenceInfo(token: string, conference: NewConferenceParams): void {
        this.conferenceService.updateConferenceInfo(token, new ConferenceBusinessImpl(
            conference.confId, conference.name, "", conference.description, conference.date, conference.address, 0, conference.maxUsers
        ))
    }

    getParticipantConference(token: string, name: string): Promise<Array<UserBusinessModel>> {
        return this.conferenceService.getParticipantConference(token, name)
    }

    updateParticipantConference(token: string, name: string): void {
        this.conferenceService.updateParticipantConference(token, name)
    }

    getReviews(token: string, name: string): Promise<Array<ReviewBusiness>> {
        return this.conferenceService.getReviews(token, name)
    }

    createReview(token: string, name: string, review: CreateReviewDto): void {
        this.conferenceService.createReview(token, name, new ReviewBusinessImpl(
            review.login, review.name, review.surname, review.date, review.description
        ))
    }
}