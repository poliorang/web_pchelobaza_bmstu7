import {FarmDatabase} from "./FarmDatabase";
import {HoneyBusiness} from "../../business/honey/HoneyBusiness";
import {FarmBusiness} from "../../business/farm/FarmBusiness";
import {HoneyDatabase} from "../honey/HoneyDatabase";
import {FarmBusinessImpl} from "../../business/farm/FarmBusinessImpl";

export class FarmDatabaseImpl implements FarmDatabase {
    constructor(
        private id: number,
        private name: string,
        private description: string,
        private address: string,
        private userLogin: string,
        private userId: number,
        private honeys: Array<HoneyBusiness>
    ) {}


    convert(): FarmBusiness {
        return new FarmBusinessImpl(
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

    getHoneys(): Array<HoneyDatabase> {
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

    setAddress(address: string): FarmDatabase {
        this.address = address
        return this;
    }

    setDescription(description: string): FarmDatabase {
        this.description = description
        return this;
    }

    setHoney(array: Array<HoneyDatabase>): FarmDatabase {
        this.honeys = array
        return this;
    }

    setId(id: number): FarmDatabase {
        this.id = id
        return this;
    }

    setName(name: string): FarmDatabase {
        this.name = name
        return this;
    }

    setUserLogin(userLogin: string): FarmDatabase {
        this.userLogin = userLogin
        return this;
    }

    setUserId(id: number): FarmDatabase {
        this.userId = id
        return this
    }
}