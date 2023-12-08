import {ConferenceDatabase} from "../../database/conference/ConferenceDatabase";

export interface ConferenceBusiness {
    getConfId(): number
    getName(): string
    getOwner(): string
    getDescription(): string
    getDate(): string
    getAddress(): string
    getCurrentUsers(): number
    getMaxUsers(): number

    setConfId(id: number): ConferenceBusiness
    setName(name: string): ConferenceBusiness
    setOwner(owner: string): ConferenceBusiness
    setDescription(description: string): ConferenceBusiness
    setDate(date: string): ConferenceBusiness
    setAddress(address: string): ConferenceBusiness
    setCurrentUsers(currentUsers: number): ConferenceBusiness
    setMaxUsers(maxUsers: number): ConferenceBusiness

    convert(): ConferenceDatabase
}