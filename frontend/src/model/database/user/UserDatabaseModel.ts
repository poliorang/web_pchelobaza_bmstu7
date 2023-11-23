import {UserBusinessModel} from "../../business/user/UserBusinessModel";

export interface UserDatabaseModel {
    setId(id: number): UserDatabaseModel
    setLogin(login: string): UserDatabaseModel
    setPassword(password: string): UserDatabaseModel
    setName(name: string): UserDatabaseModel
    setSurname(surname: string): UserDatabaseModel
    setContact(contact: string): UserDatabaseModel
    setRegDate(regDate: string): UserDatabaseModel
    setRole(role: string): UserDatabaseModel

    getId(): number
    getLogin(): string
    getPassword(): string
    getName(): string
    getSurname(): string
    getContact(): string
    getRegDate(): string
    getRole(): string

    convert(): UserBusinessModel
}