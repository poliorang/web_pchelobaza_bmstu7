import {UserService} from "./UserService";
import {UserDaoImpl} from "../../dao/user/UserDaoImpl";
import {UserBusinessModel} from "../../model/business/user/UserBusinessModel";
import {UserDao} from '../../dao/user/UserDao';

export class UserServiceImpl implements UserService {
    private userDao: UserDao;

    constructor(dao?: UserDao) {
        this.userDao = dao ?? new UserDaoImpl();
    }

    getUser(login: string, token: string): Promise<UserBusinessModel> {
        return this.userDao.getUser(login, token).then(
            user => {
                return user.convert()
            }
        )
    }

    updateUser(token: string, dto: UserBusinessModel) {
        return this.userDao.updateUser(token, dto.convert())
    }
}
