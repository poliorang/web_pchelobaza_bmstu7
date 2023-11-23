import {RequestBusiness} from "../../model/business/request/RequestBusiness";
import {RequestDatabase} from "../../model/database/request/RequestDatabase";
import {RqParamsLimited} from "../../dto/RqParamsLimited";

export interface RequestService {
    getRequests(params: RqParamsLimited): Promise<Array<RequestBusiness>> 
    createRequest(token: string, request: RequestBusiness): void
    updateRequest(token: string, request: RequestBusiness): void
}