import {FarmDao} from "./FarmDao";
import {RqParamsLimited} from "../../dto/RqParamsLimited";
import {FarmDatabaseImpl} from "../../model/database/farm/FarmDatabaseImpl";
import {HoneyDatabaseImpl} from "../../model/database/honey/HoneyDatabaseImpl";
import {FarmDatabase} from "../../model/database/farm/FarmDatabase";

type Honey = {
    HoneyId: number,
    Name: string,
    Description: string
}

type Farm = {
    FarmId: number,
    Name: string,
    Description: string,
    Address: string,
    UserLogin: string,
    UserId: number,
    Honey: Array<Honey>
}

type GetFarmRs = {
    farms: Array<Farm>
}

export class FarmDaoImpl implements FarmDao {
    private host = "http://localhost:8080/"
    private apiVersion = "api/v1/"

    async getFarms(params: RqParamsLimited): Promise<Array<FarmDatabase>> {
        const response = await fetch(`${this.host}${this.apiVersion}farms?login=${params.login}&limit=${params.limit}&skipped=${params.skipped}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${params.token}`
            }
        });

        if (!response.ok) {
            return Promise.reject();
        }

        let result = ((await response.json()) as GetFarmRs);
        console.log("farms", result);

        return result.farms.map(farm => {
            return new FarmDatabaseImpl(
                farm.FarmId, farm.Name, farm.Description, farm.Address, farm.UserLogin, farm.UserId,
            farm.Honey.map(honey => {
                    return new HoneyDatabaseImpl(
                        honey.HoneyId, honey.Name, honey.Description
                    )
                })
            )
        })
    }

    async getConcreteFarm(farmName: string, token: string): Promise<FarmDatabase> {
        const response = await fetch(`${this.host}${this.apiVersion}farms/${farmName}`, {
            method: 'GET',  
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        let farm = ((await response.json()) as any);

        console.log(farm);
        

        return new FarmDatabaseImpl(
            farm.FarmId, farm.Name, farm.Description, farm.Address, farm.UserLogin, farm.UserLogin,
            farm.Honey?.map((honey: any) => {
                return new HoneyDatabaseImpl(
                    honey.HoneyId, honey.Name, honey.Description
                )
            })
        )
    }

    createFarm(token: string, farm: FarmDatabase) {
        return fetch(`${this.host}${this.apiVersion}farms`, {
            method: 'POST',
            body: JSON.stringify({
                farmId: farm.getId(),
                name: farm.getName(),
                description: farm.getDescription(),
                address: farm.getAddress(),
                userLogin: farm.getLogin(),
                userId: farm.getUserId(),
                honey: farm.getHoneys().map(honey => {
                    return {
                        honeyId: honey.getId(),
                        name: honey.getName(),
                        description: honey.getDescription()
                    }
                })
            }),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    }

    updateFarm(farmName: string, token: string, farm: FarmDatabase) {
        console.log("aaa", farmName, farm.getId(), farm.getDescription(), farm.getAddress(), farm.getHoneys());
        return fetch(`${this.host}${this.apiVersion}farms/${farmName}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: farm.getName(),
                farmId: farm.getId(),
                description: farm.getDescription(),
                address: farm.getAddress(),
                honey: farm.getHoneys().map(honey => {
                    return {
                        honeyId: honey.getId(),
                        name: honey.getName(),
                        description: honey.getDescription()
                    }
                })
            }),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    }
}
