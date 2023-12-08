import { FarmDao } from './../dao/farm/FarmDao';
import { HoneyDao } from './../dao/honey/HoneyDao';
import { HoneyServiceImpl } from '../service/honey/HoneyServiceImpl';
import { HoneyDatabase } from '../model/database/honey/HoneyDatabase';
import { FarmServiceImpl } from '../service/farm/FarmServiceImpl';
import { RqParamsLimited } from '../dto/RqParamsLimited';
import { FarmDatabase } from '../model/database/farm/FarmDatabase';
import { FarmDatabaseImpl } from '../model/database/farm/FarmDatabaseImpl';

class MockFarmDao implements FarmDao {
    getFarms(params: RqParamsLimited): Promise<FarmDatabase[]> {
        return Promise.resolve([]);
    }
    getConcreteFarm(farmName: string, token: string): Promise<FarmDatabase> {
        return Promise.resolve(new FarmDatabaseImpl(0, "name", "desc", "addr", "login", 0, []))
    }
    async createFarm(token: string, farm: FarmDatabase) {
        return;
    }
    async updateFarm(farmName: string, token: string, farm: FarmDatabase) {
        return;
    }

}

describe('AuthServiceImpl', () => {
    let dao: FarmDao;
    let service: FarmServiceImpl;

    beforeEach(() => {
        dao = new MockFarmDao();
        service = new FarmServiceImpl(dao);
    });

    it('should call method getFarms of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'getFarms');

        const params: RqParamsLimited = {
            limit: 0,
            login: "1",
            skipped: 0,
            token: "t"
        }

        await service.getFarms(params);

        expect(spy).toBeCalledWith(params);
    });

    it('should call method getConcreteFarm of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'getConcreteFarm');

        await service.getConcreteFarm("name", "token");

        expect(spy).toBeCalledWith("name", "token");
    });

    it('should call method createFarm of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'createFarm');

        const farm = (new FarmDatabaseImpl(0, "name", "desc", "addr", "login", 0, [])).convert();

        await service.createFarm("token", farm);

        expect(spy).toBeCalledWith("token", farm);
    });

    it('should call method updateFarm of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'updateFarm');

        const farm = (new FarmDatabaseImpl(0, "name", "desc", "addr", "login", 0, [])).convert();

        await service.updateFarm("name", "token", farm);

        expect(spy).toBeCalledWith("name", "token", farm);
    });

});
