import { RequestDao } from '../dao/request/RequestDao';
import { RequestServiceImpl } from '../service/request/RequestServiceImpl';
import { RqParamsLimited } from '../dto/RqParamsLimited';
import { RequestDatabase } from '../model/database/request/RequestDatabase';
import { RequestBusinessImpl } from '../model/business/request/RequestBusinessImpl';

class MockRequestDao implements RequestDao {
    getRequests(params: RqParamsLimited): Promise<RequestDatabase[]> {
        return Promise.resolve([]);
    }
    async createRequest(token: string, request: RequestDatabase) {
        return;
    }
    async updateRequest(token: string, request: RequestDatabase) {
        return;
    }
}

describe('AuthServiceImpl', () => {
    let dao: RequestDao;
    let service: RequestServiceImpl;

    beforeEach(() => {
        dao = new MockRequestDao();
        service = new RequestServiceImpl(dao);
    });

    it('should call method getRequests of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'getRequests');

        const params: RqParamsLimited = {
            limit: 0,
            login: "1",
            skipped: 0,
            token: "1"
        }

        await service.getRequests(params)

        expect(spy).toBeCalledWith(params);
    });

    it('should call method createRequest of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'createRequest');

        const req = new RequestBusinessImpl(0, 0, "1", "2", "3")

        await service.createRequest("token", req)

        expect(spy).toBeCalledWith("token", req);
    });

    it('should call method updateRequest of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'updateRequest');

        const req = new RequestBusinessImpl(0, 0, "1", "2", "3")

        await service.updateRequest("token", req)

        expect(spy).toBeCalledWith("token", req);
    });
});
