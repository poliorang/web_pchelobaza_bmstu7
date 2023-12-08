import { UserServiceImpl } from './../service/user/UserServiceImpl';
import { UserDao } from '../dao/user/UserDao';
import { UserDatabaseModel } from '../model/database/user/UserDatabaseModel';
import {UserDatabaseModelImpl} from '../model/database/user/UserDatabaseModelImpl';

class MockUserDao implements UserDao {
    getUser(login: string, token: string): Promise<UserDatabaseModel> {
        return Promise.resolve(new UserDatabaseModelImpl(0, "login", "pass", "name", "surname", "cont", "reg", "role"));
    }
    updateUser(token: string, user: UserDatabaseModel): Promise<any> {
        return Promise.resolve();
    }
}

describe('AuthServiceImpl', () => {
    let service: UserServiceImpl;
    let dao: UserDao;

    beforeEach(() => {
        dao = new MockUserDao();
        service = new UserServiceImpl(dao);
    });

    it('should call method getUser of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'getUser');

        await service.getUser("login", "token")

        expect(spy).toBeCalledWith("login", "token");
    });

    it('should return data from method', async () => {
        const result = await service.getUser("login", "token");

        expect(result.getName()).toBe("name");
        expect(result.getRole()).toBe("role");
        expect(result.getLogin()).toBe("pass");
        expect(result.getSurname()).toBe("surname");

    });

    it('should call method updateUser of dao with correct arguments', async () => {
        const spy = jest.spyOn(dao, 'updateUser')

        const user = new UserDatabaseModelImpl(0, "login", "pass", "name", "surname", "cont", "reg", "role");

        await service.updateUser("token", user);

        expect(spy).toHaveBeenCalledWith("token", user.convert());
    });
});
