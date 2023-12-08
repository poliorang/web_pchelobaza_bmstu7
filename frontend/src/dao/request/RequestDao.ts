import {RequestDatabase} from "../../model/database/request/RequestDatabase";
import {RqParamsLimited} from "../../dto/RqParamsLimited";

export interface RequestDao {
    getRequests(params: RqParamsLimited): Promise<Array<RequestDatabase>>
    createRequest(token: string, request: RequestDatabase): Promise<any>
    updateRequest(token: string, request: RequestDatabase): Promise<any>
}