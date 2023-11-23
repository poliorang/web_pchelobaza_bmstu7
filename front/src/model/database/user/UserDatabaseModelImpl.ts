import {UserDatabaseModel} from "./UserDatabaseModel";
import {UserBusinessModel} from "../../business/user/UserBusinessModel";
import {UserBusinessModelImpl} from "../../business/user/UserBusinessModelImpl";

export class UserDatabaseModelImpl implements UserDatabaseModel {
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

    setPassword(password: string): UserDatabaseModel {
        this.password = password
        return this
    }
    getPassword(): string {
        return this.password
    }

    convert(): UserBusinessModel {
        return new UserBusinessModelImpl(
            this.id, this.password, this.login, this.name, this.surname, this.contact, this.regDate, this.role
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

    setContact(contact: string): UserDatabaseModel {
        this.contact = contact
        return this;
    }

    setId(id: number): UserDatabaseModel {
        this.id = id
        return this;
    }

    setLogin(login: string): UserDatabaseModel {
        this.login = login
        return this;
    }

    setName(name: string): UserDatabaseModel {
        this.name = name
        return this;
    }

    setRegDate(regDate: string): UserDatabaseModel {
        this.regDate = regDate
        return this;
    }

    setRole(role: string): UserDatabaseModel {
        this.role = role
        return this;
    }

    setSurname(surname: string): UserDatabaseModel {
        this.surname = surname
        return this;
    }
}