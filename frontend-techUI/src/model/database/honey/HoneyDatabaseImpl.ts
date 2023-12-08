import {HoneyDatabase} from "./HoneyDatabase";
import {HoneyBusiness} from "../../business/honey/HoneyBusiness";
import {HoneyBusinessImpl} from "../../business/honey/HoneyBusinessImpl";

export class HoneyDatabaseImpl implements HoneyDatabase {
    constructor(
        private id: number,
        private name: string,
        private description: string
    ) { }

    convert(): HoneyBusiness {
        return new HoneyBusinessImpl(this.id, this.name, this.description);
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

    setDescription(description: string): HoneyDatabase {
        this.description = description
        return this;
    }

    setId(id: number): HoneyDatabase {
        this.id = id
        return this;
    }

    setName(name: string): HoneyDatabase {
        this.name = name
        return this;
    }

}