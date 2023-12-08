import {RequestDao} from "./RequestDao";
import {RequestDatabase} from "../../model/database/request/RequestDatabase";
import {RequestDatabaseImpl} from "../../model/database/request/RequestDatabaseImpl";
import {RqParamsLimited} from "../../dto/RqParamsLimited";

type Request = {
    RequestId: number,
    UserId: number,
    UserLogin: string,
    Description: string,
    Status: string
}

type GetRequestRq = {
    requests: Array<Request>
}

export class RequestDaoImpl implements RequestDao {
    private host = "http://localhost:8080/"
    private apiVersion = "api/v1/"

    async getRequests(params: RqParamsLimited): Promise<Array<RequestDatabase>> {
        var loginParam = ""
        if (params.login != "") {
            loginParam = `login=${params.login}&`
        }

        const response = await fetch(`${this.host}${this.apiVersion}requests?${loginParam}limit=${params.limit}&skipped=${params.skipped}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${params.token}`
            }
        });

        let result = ((await response.json()) as GetRequestRq);
        console.log(result);

        return result.requests.map(request =>  {
            const res = new RequestDatabaseImpl(
                request.RequestId, request.UserId, request.UserLogin, request.Description, request.Status
            )
            return res
        })
    }

    createRequest(token: string, request: RequestDatabase) {
        return fetch(`${this.host}${this.apiVersion}requests`, {
            method: 'POST',
            body: JSON.stringify({
                login: request.getLogin(),
                description: request.getDescription(),
                status: request.getStatus()
            }),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    }

    updateRequest(token: string, request: RequestDatabase) {
        return fetch(`${this.host}${this.apiVersion}requests?login=${request.getLogin()}`, {
            method: 'PATCH',
            body: JSON.stringify({
                login: request.getLogin(),
                description: request.getDescription(),
                status: request.getStatus()
            }),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    }
}
