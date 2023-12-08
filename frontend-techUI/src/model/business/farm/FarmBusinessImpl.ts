import {FarmBusiness} from "./FarmBusiness";
import {HoneyBusiness} from "../honey/HoneyBusiness";
import {FarmDatabase} from "../../database/farm/FarmDatabase";
import {FarmDatabaseImpl} from "../../database/farm/FarmDatabaseImpl";

export class FarmBusinessImpl implements FarmBusiness {
    constructor(
        private id: number,
        private name: string,
        private description: string,
        private address: string,
        private userLogin: string,
        private userId: number,
        private honeys: Array<HoneyBusiness>
    ) {}


    convert(): FarmDatabase {
        return new FarmDatabaseImpl(
            this.id, this.name, this.description, this.address, this.userLogin, this.userId, this.honeys.map(it => {
                return it.convert()
            })
        );
    }

    getAddress(): string {
        return this.address;
    }

    getDescription(): string {
        return this.description;
    }

    getHoneys(): Array<HoneyBusiness> {
        return this.honeys;
    }

    getId(): number {
        return this.id;
    }

    getLogin(): string {
        return this.userLogin;
    }

    getName(): string {
        return this.name;
    }

    getUserId(): number {
        return this.userId;
    }

    setAddress(address: string): FarmBusiness {
        this.address = address
        return this;
    }

    setDescription(description: string): FarmBusiness {
        this.description = description
        return this;
    }

    setHoney(array: Array<HoneyBusiness>): FarmBusiness {
        this.honeys = array
        return this;
    }

    setId(id: number): FarmBusiness {
        this.id = id
        return this;
    }

    setName(name: string): FarmBusiness {
        this.name = name
        return this;
    }

    setUserLogin(userLogin: string): FarmBusiness {
        this.userLogin = userLogin
        return this;
    }

    setUserId(id: number): FarmBusiness {
        this.userId = id
        return this
    }

}