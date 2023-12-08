import {FarmService} from "./FarmService";
import {FarmDaoImpl} from "../../dao/farm/FarmDaoImpl";
import {RqParamsLimited} from "../../dto/RqParamsLimited";
import {FarmBusiness} from "../../model/business/farm/FarmBusiness";
import { FarmDao } from "../../dao/farm/FarmDao";

export class FarmServiceImpl implements FarmService {
    private farmDao;

    constructor(dao?: FarmDao) {
        this.farmDao = dao ?? new FarmDaoImpl();
    }

    getFarms(params: RqParamsLimited): Promise<Array<FarmBusiness>> {
        return this.farmDao.getFarms(params).then(
            array => {
                return array.map(farm => {
                    return farm.convert()
                })
            }
        )
    }

    getConcreteFarm(farmName: string, token: string): Promise<FarmBusiness> {
        return this.farmDao.getConcreteFarm(farmName, token).then(it => {
            console.log('it', it);
            
            return it.convert()
        })
    }

    createFarm(token: string, farm: FarmBusiness) {
        return this.farmDao.createFarm(token, farm.convert())
    }

    updateFarm(farmName: string, token: string, farm: FarmBusiness) {
        return this.farmDao.updateFarm(farmName, token, farm)
    }
}
