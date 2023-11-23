import {ReviewDatabase} from "./ReviewDatabase";
import {ReviewBusiness} from "../../business/review/ReviewBusiness";
import {ReviewBusinessImpl} from "../../business/review/ReviewBusinessImpl";

export class ReviewDatabaseImpl implements ReviewDatabase {
    constructor(
        private login: string,
        private name: string, 
        private surname: string, 
        private date: string, 
        private description: string
    ) {}

    convert(): ReviewBusiness {
        return new ReviewBusinessImpl(this.login, this.name, this.surname, this.date, this.description);
    }

    getLogin(): string {
        return this.login;
    }

    getName(): string {
        return this.name;
    }

    getSurname(): string {
        return this.surname;
    }

    getdDate(): string {
        return this.date;
    }

    getDescription(): string {
        return this.description;
    }

    
    setLogin(login: string): ReviewDatabase {
        this.login = login
        return this;
    }

    setName(name: string): ReviewDatabase {
        this.name = name
        return this;
    }

    setSurname(surname: string): ReviewDatabase {
        this.surname = surname
        return this;
    }

    setDate(date: string): ReviewDatabase {
        this.date = date
        return this;
    }

    setDescription(description: string): ReviewDatabase {
        this.description = description
        return this;
    }
}