import {HoneyBusiness} from "../honey/HoneyBusiness";
import {FarmDatabase} from "../../database/farm/FarmDatabase";

export interface FarmBusiness {
    getId(): number
    getName(): string
    getDescription(): string
    getAddress(): string
    getLogin(): string
    getUserId(): number
    getHoneys(): Array<HoneyBusiness>

    setId(id: number): FarmBusiness
    setName(name: string): FarmBusiness
    setDescription(description: string): FarmBusiness
    setAddress(address: string): FarmBusiness
    setUserLogin(userLogin: string): FarmBusiness
    setUserId(id: number): FarmBusiness
    setHoney(array: Array<HoneyBusiness>): FarmBusiness

    convert(): FarmDatabase
}