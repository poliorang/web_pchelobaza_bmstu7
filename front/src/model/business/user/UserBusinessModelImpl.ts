import {UserBusinessModel} from "./UserBusinessModel";
import {UserDatabaseModel} from "../../database/user/UserDatabaseModel";
import {UserDatabaseModelImpl} from "../../database/user/UserDatabaseModelImpl";

export class UserBusinessModelImpl implements UserBusinessModel {
    constructor(
        private id: number,
        private login: string,
        private password: string,
        private name: string,
        private surname: string,
        private contact: string,
        private regDate: string,
        private role: string
    ) {}

    convert(): UserDatabaseModel {
        return new UserDatabaseModelImpl(
            this.id, this.login, this.password, this.name, this.surname, this.contact, this.regDate, this.role
        );
    }

    getContact(): string {
        return this.contact;
    }

    getId(): number {
        return this.id;
    }

    getLogin(): string {
        return this.login;
    }

    getName(): string {
        return this.name;
    }

    getRegDate(): string {
        return this.regDate;
    }

    getRole(): string {
        return this.role;
    }

    getSurname(): string {
        return this.surname;
    }

    setContact(contact: string): UserBusinessModel {
        this.contact = contact
        return this;
    }

    setId(id: number): UserBusinessModel {
        this.id = id
        return this;
    }

    setLogin(login: string): UserBusinessModel {
        this.login = login
        return this;
    }

    setName(name: string): UserBusinessModel {
        this.name = name
        return this;
    }

    setRegDate(regDate: string): UserBusinessModel {
        this.regDate = regDate
        return this;
    }

    setRole(role: string): UserBusinessModel {
        this.role = role
        return this;
    }

    setSurname(surname: string): UserBusinessModel {
        this.surname = surname
        return this;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string): UserBusinessModel {
        this.password = password
        return this;
    }
}