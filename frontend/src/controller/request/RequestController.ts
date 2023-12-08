import {RequestBusiness} from "../../model/business/request/RequestBusiness";
import {RequestServiceImpl} from "../../service/request/RequestServiceImpl";
import {CreateRequestDto} from "../../dto/CreateRequestDto";
import {RequestBusinessImpl} from "../../model/business/request/RequestBusinessImpl";
import {RqParamsLimited} from "../../dto/RqParamsLimited";

export class RequestController {
    private requestService = new RequestServiceImpl()

    getRequests(params: RqParamsLimited): Promise<Array<RequestBusiness>> {
        return this.requestService.getRequests(params)
    }

    createRequest(token: string, rq: CreateRequestDto) {
        return this.requestService.createRequest(token, new RequestBusinessImpl(
            0, 0, rq.login, rq.description, rq.status
        ))
    }

    updateRequest(token: string, rq: CreateRequestDto) {
        return this.requestService.updateRequest(token, new RequestBusinessImpl(
            0, 0, rq.login, rq.description, rq.status
        ))
    }
}
