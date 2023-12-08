import {HoneyBusiness} from "../../business/honey/HoneyBusiness";

export interface HoneyDatabase {
    getId(): number
    getName(): string
    getDescription(): string

    setId(id: number): HoneyDatabase
    setName(name: string): HoneyDatabase
    setDescription(description: string): HoneyDatabase

    convert(): HoneyBusiness
}