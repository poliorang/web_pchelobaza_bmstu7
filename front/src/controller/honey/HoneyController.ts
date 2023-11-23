import {HoneyServiceImpl} from "../../service/honey/HoneyServiceImpl";
import {HoneyBusiness} from "../../model/business/honey/HoneyBusiness";

export class HoneyController {
    private honeyService = new HoneyServiceImpl()

    getHoneys(token: string): Promise<Array<HoneyBusiness>> {
        return this.honeyService.getHoneys(token)
    }
}