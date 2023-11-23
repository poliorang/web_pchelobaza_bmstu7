import {RequestDatabase} from "../../database/request/RequestDatabase";

export interface RequestBusiness {
    getLogin(): string
    getDescription(): string
    getStatus(): string

    setLogin(login: string): RequestBusiness
    setDescription(description: string): RequestBusiness
    setStatus(status: string): RequestBusiness

    convert(): RequestDatabase
}