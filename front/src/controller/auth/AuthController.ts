import {SingupRqDto} from "../../dto/SingupRqDto";
import {AuthServiceImpl} from "../../service/auth/AuthServiceImpl";

export class AuthController {
    private authService = new AuthServiceImpl()

    login(login: string, password: string): Promise<string> {
        return this.authService.login(login, password).then(
            it => { return it }
        ).catch(error => {
            throw error
        })
    }

    signup(dto: SingupRqDto): Promise<string> {
        return this.authService.signup(dto)
    }
}