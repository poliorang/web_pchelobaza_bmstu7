import {HoneyDatabase} from "../../database/honey/HoneyDatabase";

export interface HoneyBusiness {
    getId(): number
    getName(): string
    getDescription(): string

    setId(id: number): HoneyBusiness
    setName(name: string): HoneyBusiness
    setDescription(description: string): HoneyBusiness

    convert(): HoneyDatabase
}