import {UserDatabaseModel} from "../../model/database/user/UserDatabaseModel";

export interface UserDao {
    getUser(login: string, token: string): Promise<UserDatabaseModel>
    updateUser(token: string, user: UserDatabaseModel): Promise<any>
}