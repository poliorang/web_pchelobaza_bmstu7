import {ReviewBusiness} from "./ReviewBusiness";
import {ReviewDatabaseImpl} from "../../database/review/ReviewDatabaseImpl";
import {ReviewDatabase} from "../../database/review/ReviewDatabase";

export class ReviewBusinessImpl implements ReviewBusiness {
    constructor(
        private login: string,
        private name: string, 
        private surname: string, 
        private date: string, 
        private description: string
    ) {}

    convert(): ReviewDatabase {
        return new ReviewDatabaseImpl(this.login, this.name, this.surname, this.date, this.description);
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

    
    setLogin(login: string): ReviewBusiness {
        this.login = login
        return this;
    }

    setName(name: string): ReviewBusiness {
        this.name = name
        return this;
    }

    setSurname(surname: string): ReviewBusiness {
        this.surname = surname
        return this;
    }

    setDate(date: string): ReviewBusiness {
        this.date = date
        return this;
    }

    setDescription(description: string): ReviewBusiness {
        this.description = description
        return this;
    }
}