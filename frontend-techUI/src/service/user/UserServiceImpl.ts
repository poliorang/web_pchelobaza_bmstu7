import {UserService} from "./UserService";
import {UserDaoImpl} from "../../dao/user/UserDaoImpl";
import {UserBusinessModel} from "../../model/business/user/UserBusinessModel";

export class UserServiceImpl implements UserService {
    private userDao = new UserDaoImpl()

    getUser(login: string, token: string): Promise<UserBusinessModel> {
        return this.userDao.getUser(login, token).then(
            user => {
                return user.convert()
            }
        )
    }

    updateUser(token: string, dto: UserBusinessModel): void {
        return this.userDao.updateUser(token, dto.convert())
    }
}