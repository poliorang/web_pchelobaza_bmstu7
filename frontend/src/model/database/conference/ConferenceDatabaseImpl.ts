import {ConferenceDatabase} from "./ConferenceDatabase";
import {ConferenceBusiness} from "../../business/conference/ConferenceBusiness";
import {ConferenceBusinessImpl} from "../../business/conference/ConferenceBusinessImpl";

export class ConferenceDatabaseImpl implements ConferenceDatabase {
    constructor(
        private confId: number,
        private name: string,
        private owner: string,
        private description: string,
        private date: string,
        private address: string,
        private currentUsers: number,
        private maxUsers: number
    ) {}


    convert(): ConferenceBusiness {
        return new ConferenceBusinessImpl(this.confId, this.name, this.owner, this.description, this.date, this.address, this.currentUsers, this.maxUsers);
    }

    getConfId(): number {
        return this.confId;
    }
    
    getAddress(): string {
        return this.address;
    }

    getCurrentUsers(): number {
        return this.currentUsers;
    }

    getDate(): string {
        return this.date
    }

    getDescription(): string {
        return this.description
    }

    getMaxUsers(): number {
        return this.maxUsers
    }

    getName(): string {
        return this.name;
    }

    getOwner(): string {
        return this.owner;
    }

    setConfId(confId: number): ConferenceDatabase {
        this.confId = confId
        return this;
    }

    setAddress(address: string): ConferenceDatabase {
        this.address = address
        return this;
    }

    setCurrentUsers(currentUsers: number): ConferenceDatabase {
        this.currentUsers = currentUsers
        return this;
    }

    setDate(date: string): ConferenceDatabase {
        this.date = date
        return this;
    }

    setDescription(description: string): ConferenceDatabase {
        this.description = description
        return this;
    }

    setMaxUsers(maxUsers: number): ConferenceDatabase {
        this.maxUsers = maxUsers
        return this;
    }

    setName(name: string): ConferenceDatabase {
        this.name = name
        return this;
    }

    setOwner(owner: string): ConferenceDatabase {
        this.owner = owner
        return this;
    }
}