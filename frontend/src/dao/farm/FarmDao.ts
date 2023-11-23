import {RqParamsLimited} from "../../dto/RqParamsLimited";
import {FarmDatabase} from "../../model/database/farm/FarmDatabase";

export interface FarmDao {
    getFarms(params: RqParamsLimited): Promise<Array<FarmDatabase>>
    getConcreteFarm(farmName: string, token: string): Promise<FarmDatabase>
    createFarm(token: string, farm: FarmDatabase): void
    updateFarm(farmName: string, token: string, farm: FarmDatabase): void
}