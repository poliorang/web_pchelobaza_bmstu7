import {HoneyDatabase} from "../../model/database/honey/HoneyDatabase";
import {HoneyBusiness} from "../../model/business/honey/HoneyBusiness";

export interface HoneyService {
    getHoneys(token: string): Promise<Array<HoneyBusiness>>
}