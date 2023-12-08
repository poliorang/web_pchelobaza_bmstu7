import {FarmBusiness} from "../../business/farm/FarmBusiness";
import {HoneyDatabase} from "../honey/HoneyDatabase";

export interface FarmDatabase {
    getId(): number
    getName(): string
    getDescription(): string
    getAddress(): string
    getLogin(): string
    getUserId(): number
    getHoneys(): Array<HoneyDatabase>

    setId(id: number): FarmDatabase
    setName(name: string): FarmDatabase
    setDescription(description: string): FarmDatabase
    setAddress(address: string): FarmDatabase
    setUserLogin(userLogin: string): FarmDatabase
    setUserId(id: number): FarmDatabase
    setHoney(array: Array<HoneyDatabase>): FarmDatabase

    convert(): FarmBusiness
}