import {RequestBusiness} from "./RequestBusiness";
import {RequestDatabase} from "../../database/request/RequestDatabase";
import {RequestDatabaseImpl} from "../../database/request/RequestDatabaseImpl";

export class RequestBusinessImpl implements RequestBusiness {
    constructor(
        private requestId: number,
        private userId: number,
        private login: string,
        private description: string,
        private status: string
    ) { }

    convert(): RequestDatabase {
        return new RequestDatabaseImpl(this.requestId, this.userId, this.login, this.description, this.status);
    }

    getRequestIdUsertId(): number {
        return this.requestId;
    }

    getUsertId(): number {
        return this.userId;
    }

    getDescription(): string {
        return this.description;
    }

    getLogin(): string {
        return this.login;
    }

    getStatus(): string {
        return this.status;
    }

    setUserId(userId: number): RequestBusiness {
        this.userId = userId
        return this;
    }

    setRequestId(requestId: number): RequestBusiness {
        this.requestId = requestId
        return this;
    }

    setDescription(description: string): RequestBusiness {
        this.description = description
        return this;
    }

    setLogin(login: string): RequestBusiness {
        this.login = login
        return this;
    }

    setStatus(status: string): RequestBusiness {
        this.status = status
        return this;
    }
}