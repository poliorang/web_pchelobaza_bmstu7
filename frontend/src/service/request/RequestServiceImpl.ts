import {RequestService} from "./RequestService";
import {RequestDaoImpl} from "../../dao/request/RequestDaoImpl";
import {RequestBusiness} from "../../model/business/request/RequestBusiness";
import {RqParamsLimited} from "../../dto/RqParamsLimited";
import { RequestDao } from "../../dao/request/RequestDao";

export class RequestServiceImpl implements RequestService {
    private requestDao: RequestDao;

    constructor(dao?: RequestDao) {
        this.requestDao = dao ?? new RequestDaoImpl()
    }

    getRequests(params: RqParamsLimited): Promise<Array<RequestBusiness>> {
        return this.requestDao.getRequests(params).then(
            array => {
                console.log("a", array);

                return array.map(request => {
                    return request.convert()
                })
            }
        )
    }

    createRequest(token: string, request: RequestBusiness) {
        return this.requestDao.createRequest(token, request.convert())
    }

    updateRequest(token: string, request: RequestBusiness) {
        return this.requestDao.updateRequest(token, request.convert())
    }
}
