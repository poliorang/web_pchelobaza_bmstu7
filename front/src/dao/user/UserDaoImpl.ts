import {UserDao} from "./UserDao";
import {UserDatabaseModel} from "../../model/database/user/UserDatabaseModel";
import {UserDatabaseModelImpl} from "../../model/database/user/UserDatabaseModelImpl";


type GetUserRs = {
    contact: string,
    login: string,
    name: string,
    registration_date: string,
    surname: string,
    role: string,
    userId: number
}

export class UserDaoImpl implements UserDao {
    private host = "http://localhost:8080/"
    private apiVersion = "api/v1/"

    async getUser(login: string, token: string): Promise<UserDatabaseModel> {
        const response = await fetch(`${this.host}${this.apiVersion}users/${login}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        let result = ((await response.json()) as GetUserRs);
        
        return new UserDatabaseModelImpl(
            result.userId, "", result.login, result.name, result.surname, result.contact, result.registration_date, result.role
        );
    }

    updateUser(token: string, user: UserDatabaseModel): void {
        console.log("aaa", token, user.getId(), user.getLogin(), user.getPassword(), user.getName(), user.getSurname(), user.getContact());
        fetch(`${this.host}${this.apiVersion}users/${user.getLogin()}`, {
            method: 'PATCH',
            body: JSON.stringify({
                userId: user.getId(),
                login: user.getLogin(),
                password: user.getPassword(),
                name: user.getName(),
                surname: user.getSurname(),
                contact: user.getContact()
            }),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    }

}