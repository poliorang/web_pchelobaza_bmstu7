import {ConferenceBusiness} from "../../business/conference/ConferenceBusiness";

export interface ConferenceDatabase {
    getConfId(): number
    getName(): string
    getOwner(): string
    getDescription(): string
    getDate(): string
    getAddress(): string
    getCurrentUsers(): number
    getMaxUsers(): number

    setConfId(id: number): ConferenceDatabase
    setName(name: string): ConferenceDatabase
    setOwner(owner: string): ConferenceDatabase
    setDescription(description: string): ConferenceDatabase
    setDate(date: string): ConferenceDatabase
    setAddress(address: string): ConferenceDatabase
    setCurrentUsers(currentUsers: number): ConferenceDatabase
    setMaxUsers(maxUsers: number): ConferenceDatabase

    convert(): ConferenceBusiness
}