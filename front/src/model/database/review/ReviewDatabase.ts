import {ReviewBusiness} from "../../business/review/ReviewBusiness";

export interface ReviewDatabase {
    getLogin(): string 
    getName(): string
    getSurname(): string
    getdDate(): string 
    getDescription(): string 

    setLogin(login: string): ReviewDatabase
    setName(name: string): ReviewDatabase 
    setSurname(surname: string): ReviewDatabase 
    setDate(date: string): ReviewDatabase 
    setDescription(description: string): ReviewDatabase 

    convert(): ReviewBusiness
}