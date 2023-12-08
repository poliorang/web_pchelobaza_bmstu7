import {HoneyService} from "./HoneyService";
import {HoneyDaoImpl} from "../../dao/honey/HoneyDaoImpl";
import {HoneyBusiness} from "../../model/business/honey/HoneyBusiness";

export class HoneyServiceImpl implements HoneyService {
    private honeyDao = new HoneyDaoImpl()

    getHoneys(token: string): Promise<Array<HoneyBusiness>> {
        return this.honeyDao.getHoneys(token).then(
            array => {
                return array.map(honey => {
                    return honey.convert()
                })
            }
        )
    }

}