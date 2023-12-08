import {HoneyDao} from "./HoneyDao";
import {HoneyDatabase} from "../../model/database/honey/HoneyDatabase";
import {HoneyDatabaseImpl} from "../../model/database/honey/HoneyDatabaseImpl";

type honey = {
    HoneyId: number,
    Name: string,
    Description: string
}

type GetHoneyRs = {
    honey: Array<honey>
}

export class HoneyDaoImpl implements HoneyDao {
    private host = "http://localhost:8080/"
    private apiVersion = "api/v1/"

    async getHoneys(token: string): Promise<Array<HoneyDatabase>> {
        console.log("r", token);
        
        const response = await fetch(`${this.host}${this.apiVersion}honey`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        let result = ((await response.json()) as GetHoneyRs);
        
        return result.honey.map(honey =>  {
            return new HoneyDatabaseImpl(
                honey.HoneyId, honey.Name, honey.Description
            )
        })
    }
}