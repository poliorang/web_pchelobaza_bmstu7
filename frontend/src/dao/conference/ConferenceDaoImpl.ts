import {ConferenceDao} from "./ConferenceDao";
// import {FarmDatabaseImpl} from "../../model/database/farm/FarmDatabaseImpl";
// import {HoneyDatabaseImpl} from "../../model/database/honey/HoneyDatabaseImpl";
import {ConferenceDatabaseImpl} from "../../model/database/conference/ConferenceDatabaseImpl";
import {ConferenceDatabase} from "../../model/database/conference/ConferenceDatabase";
import {UserDatabaseModel} from "../../model/database/user/UserDatabaseModel";
import {UserDatabaseModelImpl} from "../../model/database/user/UserDatabaseModelImpl";
import {ConferenceDto} from "../../dto/ConferenceDto";
import {ReviewDatabase} from "../../model/database/review/ReviewDatabase";
import {ReviewDatabaseImpl} from "../../model/database/review/ReviewDatabaseImpl";
import { UserBusinessModel } from "../../model/business/user/UserBusinessModel";

type Conference = {
    ConferenceId: number,
    UserId: number,
    UserLogin: string,
    Description: string,
    Date: string,
    Address: string,
    Name: string,
    MaxUsers: number
}

type ConferenceRs = {
    conferences: Array<Conference>
}

type Review = {
    Login: string,
    Name: string,
    Surname: string,
    Date: string,
    Description: string,
}

type GetReviewRs = {
    reviews: Array<Review>
}

type User = {
    UserId: string,
    Login: string,
    Password: string,
    ConfirmPassword: string,
    Name: string,
    Surname: string,
    Contact: string,
    RegisteredAt: string,
    Role: string,
}

type UserRs = {
    users: Array<User>
}

export class ConferenceDaoImpl implements ConferenceDao {
    private host = "http://localhost:8080/"
    private apiVersion = "api/v1/"

    async getAllConferences(token: string, limit: string, skipped: string): Promise<Array<ConferenceDatabase>> {
        const response = await fetch(`${this.host}${this.apiVersion}conferences?limit=${limit}&skipped=${skipped}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        let result = ((await response.json()) as ConferenceRs)

        return result.conferences.map(conference => {
            return new ConferenceDatabaseImpl(
                0, conference.Name, "", conference.Description, "", "", conference.MaxUsers, 0
            )
        })
    }
    async getConference(token: string, name: string): Promise<ConferenceDatabase> {
        const response = await fetch(`${this.host}${this.apiVersion}conferences/${name}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        let conference = ((await response.json()) as ConferenceDto)

        return new ConferenceDatabaseImpl(
            0, conference.name, conference.userLogin, conference.description, conference.date, conference.address, conference.currentUsers, conference.maxUsers
        )
    }

    createNewConference(token: string, conference: ConferenceDatabase) {
        console.log(conference.getName(), conference.getOwner(), conference.getDescription(), conference.getDate(), conference.getAddress(), conference.getCurrentUsers(), conference.getMaxUsers());

        return fetch(`${this.host}${this.apiVersion}conferences`, {
            method: 'POST',
            body: JSON.stringify({
                name: conference.getName(),
                owner: conference.getOwner(),
                description: conference.getDescription(),
                date: conference.getDate(),
                address: conference.getAddress(),
                currentUsers: conference.getCurrentUsers(),
                maxUsers: conference.getMaxUsers()
            }),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    }

    updateConferenceInfo(token: string, conference: ConferenceDatabase) {
        return fetch(`${this.host}${this.apiVersion}conferences/${conference.getName()}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: conference.getName(),
                conferenceId: conference.getConfId(),
                description: conference.getDescription(),
                date: conference.getDate(),
                address: conference.getAddress(),
                maxUsers: conference.getMaxUsers()
            }),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    }

    async getParticipantConference(token: string, name: string): Promise<Array<UserBusinessModel>> {
        const response = await fetch(`${this.host}${this.apiVersion}conferences/${name}/participants?limit=20&skipped=0`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        let result = ((await response.json()) as UserRs)
        console.log(result);

        return result.users.map(user => {
            return new UserDatabaseModelImpl(
                0, user.Login, user.Surname, user.Name, "", "", "", ""
            )
        })
    }

    updateParticipantConference(token: string, name: string) {
        return fetch(`${this.host}${this.apiVersion}conferences/${name}/participants`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    }

    async getReviews(token: string, name: string): Promise<Array<ReviewDatabase>> {
        const response = await fetch(`${this.host}${this.apiVersion}conferences/${name}/reviews?limit=20&skipped=0`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        let result = ((await response.json()) as GetReviewRs)

        return result.reviews.map(review => {
            return new ReviewDatabaseImpl(
                review.Login, review.Name, review.Surname, review.Date, review.Description
            )
        })
    }

    createReview(token: string, name: string, review: ReviewDatabase) {
        console.log("aa", review.getDescription());

        return fetch(`${this.host}${this.apiVersion}conferences/${name}/reviews`, {
            method: 'POST',
            body: JSON.stringify({
                description: review.getDescription()
            }),
            headers: {
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    }
}
