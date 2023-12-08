import {SingupRqDto} from "../../dto/SingupRqDto";

export interface AuthDao {
    login(login: string, password: string): Promise<string>
    signup(dto: SingupRqDto): Promise<string>
}