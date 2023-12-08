import {RqParamsLimited} from "../../dto/RqParamsLimited";
import {FarmBusiness} from "../../model/business/farm/FarmBusiness";
import {FarmDatabase} from "../../model/database/farm/FarmDatabase";

export interface FarmService {
    getFarms(params: RqParamsLimited): Promise<Array<FarmBusiness>>
    getConcreteFarm(farmName: string, token: string): Promise<FarmBusiness>
    createFarm(token: string, farm: FarmBusiness): void
    updateFarm(farmName: string, token: string, farm: FarmBusiness): void
}