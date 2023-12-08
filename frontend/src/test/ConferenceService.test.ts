import { HoneyDao } from './../dao/honey/HoneyDao';
import { HoneyServiceImpl } from '../service/honey/HoneyServiceImpl';
import { HoneyDatabase } from '../model/database/honey/HoneyDatabase';
import { ConferenceDao } from '../dao/conference/ConferenceDao';
import { ConferenceServiceImpl } from '../service/conference/ConferenceServiceImpl';
import { UserBusinessModel } from '../model/business/user/UserBusinessModel';
import { ConferenceDatabase } from '../model/database/conference/ConferenceDatabase';
import { ReviewDatabase } from '../model/database/review/ReviewDatabase';
import { ConferenceDatabaseImpl } from '../model/database/conference/ConferenceDatabaseImpl';
import { UserBusinessModelImpl } from '../model/business/user/UserBusinessModelImpl';
import { ConferenceBusinessImpl } from '../model/business/conference/ConferenceBusinessImpl';
import { ReviewBusinessImpl } from '../model/business/review/ReviewBusinessImpl';

class MockConferenceDao implements ConferenceDao {
    async getAllConferences(token: string, limit: string, skipped: string): Promise<ConferenceDatabase[]> {
        return [];
    }
    getConference(token: string, name: string): Promise<ConferenceDatabase> {
        return Promise.resolve(new ConferenceDatabaseImpl(0, "1", "1", "1", "1", "1", 0, 0))
    }
    async createNewConference(token: string, conference: ConferenceDatabase) {
        return;
    }
    async updateConferenceInfo(token: string, conference: ConferenceDatabase) {
        return;
    }
    getParticipantConference(token: string, name: string): Promise<UserBusinessModel[]> { 
        return Promise.resolve([new UserBusinessModelImpl(0, "1", "1", "1", "1", "1", "1", "1")]);
    }
    async updateParticipantConference(token: string, name: string) {
        return;
    }
    async getReviews(token: string, name: string): Promise<ReviewDatabase[]> {
        return [];
    }
    async createReview(token: string, name: string, review: ReviewDatabase) {
        return;
    }

}

describe('AuthServiceImpl', () => {
    let dao: ConferenceDao;
    let service: ConferenceServiceImpl;

    beforeEach(() => {
        dao = new MockConferenceDao();
        service = new ConferenceServiceImpl(dao);
    });

    it('should call method createNewConference of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'createNewConference');

        const conf = (new ConferenceDatabaseImpl(0, "1", "1", "1", "1", "1", 0, 0)).convert();

        await service.createNewConference("token", conf)

        expect(spy).toBeCalledWith("token", conf);
    });

    it('should call method createReview of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'createReview');

        const rew = new ReviewBusinessImpl("1", "2", "3", "4", "5");

        await service.createReview("token", "name", rew)

        expect(spy).toBeCalledWith("token", "name", rew);
    });

    it('should call method getAllConferences of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'getAllConferences');

        await service.getAllConferences("token", "name", "str")

        expect(spy).toBeCalledWith("token", "name", "str");
    });

    it('should call method getConference of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'getConference');

        await service.getConference("token", "name")

        expect(spy).toBeCalledWith("token", "name");
    });

    it('should call method getConference of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'getConference');

        await service.getConference("token", "name")

        expect(spy).toBeCalledWith("token", "name");
    });

    it('should call method getParticipantConference of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'getParticipantConference');

        await service.getParticipantConference("token", "name")

        expect(spy).toBeCalledWith("token", "name");
    });

    it('should call method getReviews of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'getReviews');

        await service.getReviews("token", "name")

        expect(spy).toBeCalledWith("token", "name");
    });

    it('should call method updateConferenceInfo of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'updateConferenceInfo');

        const conf = (new ConferenceDatabaseImpl(0, "1", "2", "3", "4", "5", 0, 0)).convert();

        await service.updateConferenceInfo("token", conf)

        expect(spy).toBeCalledWith("token", conf);
    });

    it('should call method updateParticipantConference of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'updateParticipantConference');

        await service.updateParticipantConference("token", "name")

        expect(spy).toBeCalledWith("token", "name");
    });
});
