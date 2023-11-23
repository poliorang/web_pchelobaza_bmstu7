import {AuthService} from "./AuthService";
import {AuthDaoImpl} from "../../dao/auth/AuthDaoImpl";
import {SingupRqDto} from "../../dto/SingupRqDto";
import {AuthDao} from "../../dao/auth/AuthDao";
import { error } from "console";

export class AuthServiceImpl implements AuthService {
    private authDao: AuthDao = new AuthDaoImpl()

    constructor(dao?: AuthDao) {
        if (dao)
            this.authDao = dao
        else
            this.authDao = new AuthDaoImpl()
    }

    login(login: string, password: string): Promise<string> {
        return this.authDao.login(login, password).then(
            it => { return it }
        ).catch(error => {
            throw error
        })
    }

    signup(dto: SingupRqDto): Promise<string> {
        return this.authDao.signup(dto).then(
            it => { return it }
        )
    }

}