import {ConferenceService} from "./ConferenceService";
import {ConferenceDaoImpl} from "../../dao/conference/ConferenceDaoImpl";
import {ConferenceBusiness} from "../../model/business/conference/ConferenceBusiness";
import {ConferenceDatabase} from "../../model/database/conference/ConferenceDatabase";
import {ReviewBusiness} from "../../model/business/review/ReviewBusiness";
import { UserBusinessModel } from "../../model/business/user/UserBusinessModel";

export class ConferenceServiceImpl implements ConferenceService {
    private conferenceDao = new ConferenceDaoImpl()

    getAllConferences(token: string, limit: string, skipped: string): Promise<Array<ConferenceBusiness>> {
        return this.conferenceDao.getAllConferences(token, limit, skipped).then(it => {
            return it.map(it => {
                return it.convert()
            })
        });
    }

    getConference(token: string, name: string): Promise<ConferenceBusiness> {
        return this.conferenceDao.getConference(token, name).then( it => {
                return it.convert()
            }
        )
    }

    createNewConference(token: string, conference: ConferenceBusiness): void {
        this.conferenceDao.createNewConference(token, conference.convert())
    }

    updateConferenceInfo(token: string, conference: ConferenceBusiness): void {
        this.conferenceDao.updateConferenceInfo(token, conference.convert())
    }

    getParticipantConference(token: string, name: string): Promise<Array<UserBusinessModel>> {
        return this.conferenceDao.getParticipantConference(token, name).then( it => {
                return it.map(it => {
                    return it.convert()
                })
            }
        )
    }

    updateParticipantConference(token: string, name: string): void {
        this.conferenceDao.updateParticipantConference(token, name)
    }

    getReviews(token: string, name: string): Promise<Array<ReviewBusiness>> {
        return this.conferenceDao.getReviews(token, name).then(it => {
            return it.map(it => {
                return it.convert()
            })
        })
    }

    createReview(token: string, name: string, review: ReviewBusiness): void {
        return this.conferenceDao.createReview(token, name, review.convert())
    }
}