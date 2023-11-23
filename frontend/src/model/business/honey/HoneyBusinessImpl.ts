import {HoneyBusiness} from "./HoneyBusiness";
import {HoneyDatabaseImpl} from "../../database/honey/HoneyDatabaseImpl";
import {HoneyDatabase} from "../../database/honey/HoneyDatabase";

export class HoneyBusinessImpl implements HoneyBusiness {

    constructor(
        private id: number,
        private name: string,
        private description: string
    ) { }

    convert(): HoneyDatabase {
        return new HoneyDatabaseImpl(this.id, this.name, this.description);
    }

    getDescription(): string {
        return this.description;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setDescription(description: string): HoneyBusiness {
        this.description = description
        return this;
    }

    setId(id: number): HoneyBusiness {
        this.id = id
        return this;
    }

    setName(name: string): HoneyBusiness {
        this.name = name
        return this;
    }
}