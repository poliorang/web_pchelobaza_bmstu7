import {FarmServiceImpl} from "../../service/farm/FarmServiceImpl";
import {RqParamsLimited} from "../../dto/RqParamsLimited";
import {FarmBusiness} from "../../model/business/farm/FarmBusiness";
import {CreateFarmDto} from "../../dto/CreateFarmDto";
import {FarmBusinessImpl} from "../../model/business/farm/FarmBusinessImpl";
import {HoneyBusinessImpl} from "../../model/business/honey/HoneyBusinessImpl";

export class FarmController {
    private farmService = new FarmServiceImpl()

    getFarms(params: RqParamsLimited): Promise<Array<FarmBusiness>> {
        return this.farmService.getFarms(params)
    }

    getConcreteFarm(farmName: string, token: string): Promise<FarmBusiness> {
        return this.farmService.getConcreteFarm(farmName, token)
    }

    createFarm(token: string, farm: CreateFarmDto): void {
        return this.farmService.createFarm(token, new FarmBusinessImpl(
            farm.farmId, farm.name, farm.description, farm.address, farm.userLogin, farm.userId,
            farm.honey.map(honey => {
                return new HoneyBusinessImpl(
                    honey.honeyId, honey.name, honey.description
                )
            })
        ))
    }

    updateFarm(farmName: string, token: string, farm: CreateFarmDto): void {
        return this.farmService.updateFarm(farmName, token, new FarmBusinessImpl(
            farm.farmId, farm.name, farm.description, farm.address, farm.userLogin, farm.userId,
            farm.honey.map(honey => {
                return new HoneyBusinessImpl(
                    honey.honeyId, honey.name, honey.description
                )
            })
        ))
    }
}