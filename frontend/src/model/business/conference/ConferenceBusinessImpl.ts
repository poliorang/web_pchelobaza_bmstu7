import {ConferenceBusiness} from "./ConferenceBusiness";
import {ConferenceDatabase} from "../../database/conference/ConferenceDatabase";
import {ConferenceDatabaseImpl} from "../../database/conference/ConferenceDatabaseImpl";

export class ConferenceBusinessImpl implements  ConferenceBusiness {
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


    convert(): ConferenceDatabase {
        return new ConferenceDatabaseImpl(this.confId, this.name, this.owner, this.description, this.date, this.address, this.currentUsers, this.maxUsers);
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

    setConfId(confId: number): ConferenceBusiness {
        this.confId = confId
        return this;
    }

    setAddress(address: string): ConferenceBusiness {
        this.address = address
        return this;
    }

    setCurrentUsers(currentUsers: number): ConferenceBusiness {
        this.currentUsers = currentUsers
        return this;
    }

    setDate(date: string): ConferenceBusiness {
        this.date = date
        return this;
    }

    setDescription(description: string): ConferenceBusiness {
        this.description = description
        return this;
    }

    setMaxUsers(maxUsers: number): ConferenceBusiness {
        this.maxUsers = maxUsers
        return this;
    }

    setName(name: string): ConferenceBusiness {
        this.name = name
        return this;
    }

    setOwner(owner: string): ConferenceBusiness {
        this.owner = owner
        return this;
    }
}