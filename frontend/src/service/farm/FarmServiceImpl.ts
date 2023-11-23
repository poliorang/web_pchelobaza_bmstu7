import {FarmService} from "./FarmService";
import {FarmDaoImpl} from "../../dao/farm/FarmDaoImpl";
import {RqParamsLimited} from "../../dto/RqParamsLimited";
import {FarmBusiness} from "../../model/business/farm/FarmBusiness";

export class FarmServiceImpl implements FarmService {
    private farmDao = new FarmDaoImpl()

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
            return it.convert()
        })
    }

    createFarm(token: string, farm: FarmBusiness): void {
        return this.farmDao.createFarm(token, farm.convert())
    }

    updateFarm(farmName: string, token: string, farm: FarmBusiness): void {
        return this.farmDao.updateFarm(farmName, token, farm)
    }
}