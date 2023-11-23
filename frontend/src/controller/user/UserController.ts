import {UserServiceImpl} from "../../service/user/UserServiceImpl";
import {UserBusinessModel} from "../../model/business/user/UserBusinessModel";
import {EditUserInfoDto} from "../../dto/EditUserInfoDto";
import {UserBusinessModelImpl} from "../../model/business/user/UserBusinessModelImpl";

export class UserController {
    private userService = new UserServiceImpl()

    getUser(login: string, token: string): Promise<UserBusinessModel> {
        return this.userService.getUser(login, token)
    }

    updateUser(token: string, dto: EditUserInfoDto): void {
        this.userService.updateUser(token,
            new UserBusinessModelImpl(
                dto.userId, dto.login, dto.password, dto.name, dto.surname, dto.contact, "", ""
            )
        )
    }
}