import {UserDatabaseModel} from "../../database/user/UserDatabaseModel";

    export interface UserBusinessModel {
    setId(id: number): UserBusinessModel
    setLogin(login: string): UserBusinessModel
    setPassword(password: string): UserBusinessModel
    setName(name: string): UserBusinessModel
    setSurname(surname: string): UserBusinessModel
    setContact(contact: string): UserBusinessModel
    setRegDate(regDate: string): UserBusinessModel
    setRole(role: string): UserBusinessModel

    getId(): number
    getLogin(): string
    getPassword(): string
    getName(): string
    getSurname(): string
    getContact(): string
    getRegDate(): string
    getRole(): string

    convert(): UserDatabaseModel
}