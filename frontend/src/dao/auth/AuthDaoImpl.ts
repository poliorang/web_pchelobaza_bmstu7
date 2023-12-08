import { error } from 'console';
import {AuthDao} from "./AuthDao";
import {SingupRqDto} from "../../dto/SingupRqDto";
import { ok } from "assert";

type AuthRs = {
    token: string
}



export class AuthDaoImpl implements AuthDao {
    private host = "http://localhost:8080/"
    private apiVersion = "api/v1/"

    async login(login: string, password: string): Promise<string> {
        const response = await fetch(`${this.host}${this.apiVersion}auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'login': login,
                'password': password
            })
        });

        if (response.status == 400) {
            const res = await response.json();

            if ((res.error as string).includes("Неверный пароль")) {
                throw new Error("password");
            }
            
            throw new Error("Bad request")
        } else if (response.status == 500) {
            throw new Error("Status internal server error")
        } else if (!response.ok) {
            throw new Error("Internal server error")
        }

        return ((await response.json()) as AuthRs).token;
    }

    async signup(dto: SingupRqDto): Promise<string> {
        if (dto.contact.match(/\S+@\S+\.\S+/)) {
            const response = await fetch(`${this.host}${this.apiVersion}auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'login': dto.login,
                    'password': dto.password,
                    'confirmPassword': dto.confirmPassword,
                    'name': dto.name,
                    'surname': dto.surname,
                    'contact': dto.contact
                })
            });

            return ((await response.json()) as AuthRs).token;
        }
        return "Bad email"
    }

}
