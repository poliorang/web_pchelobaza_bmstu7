import {RequestBusiness} from "../../business/request/RequestBusiness";

export interface RequestDatabase {
    getLogin(): string
    getDescription(): string
    getStatus(): string

    setLogin(login: string): RequestDatabase
    setDescription(description: string): RequestDatabase
    setStatus(status: string): RequestDatabase

    convert(): RequestBusiness
}