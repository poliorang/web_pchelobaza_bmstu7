import {HoneyDatabase} from "../../model/database/honey/HoneyDatabase";

export interface HoneyDao {
    getHoneys(token: string): Promise<Array<HoneyDatabase>>
}