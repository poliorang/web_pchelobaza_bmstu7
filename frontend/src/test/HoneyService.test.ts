import { HoneyDao } from './../dao/honey/HoneyDao';
import { HoneyServiceImpl } from '../service/honey/HoneyServiceImpl';
import { HoneyDatabase } from '../model/database/honey/HoneyDatabase';

class MockHoneyDao implements HoneyDao {
    getHoneys(token: string): Promise<HoneyDatabase[]> {
        return Promise.resolve([])
    }
}

describe('AuthServiceImpl', () => {
    let dao: HoneyDao;
    let service: HoneyServiceImpl;

    beforeEach(() => {
        dao = new MockHoneyDao();
        service = new HoneyServiceImpl(dao);
    });

    it('should call method getHoneys of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'getHoneys');

        await service.getHoneys("token")

        expect(spy).toBeCalledWith("token");
    });

    it('should return data from method', async () => {
        const result = await service.getHoneys("token");

        expect(result).toHaveLength(0);

    });
});
