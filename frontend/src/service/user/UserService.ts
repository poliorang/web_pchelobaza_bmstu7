import {UserBusinessModel} from "../../model/business/user/UserBusinessModel";

export interface UserService {
    getUser(login: string, token: string): Promise<UserBusinessModel>
    updateUser(token: string, dto: UserBusinessModel): void
}