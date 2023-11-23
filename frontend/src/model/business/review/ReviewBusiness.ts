import {ReviewDatabase} from "../../database/review/ReviewDatabase";

export interface ReviewBusiness {
    getLogin(): string 
    getName(): string
    getSurname(): string
    getdDate(): string 
    getDescription(): string 

    setLogin(login: string): ReviewBusiness
    setName(name: string): ReviewBusiness 
    setSurname(surname: string): ReviewBusiness 
    setDate(date: string): ReviewBusiness 
    setDescription(description: string): ReviewDatabase 

    convert(): ReviewDatabase
}