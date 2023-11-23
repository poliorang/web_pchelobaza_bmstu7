import {RequestDatabase} from "./RequestDatabase";
import {RequestBusiness} from "../../business/request/RequestBusiness";
import {RequestBusinessImpl} from "../../business/request/RequestBusinessImpl";

export class RequestDatabaseImpl implements RequestDatabase {
    constructor(
        private requestId: number,
        private userId: number,
        private login: string,
        private description: string,
        private status: string
    ) { }

    convert(): RequestBusiness {
        return new RequestBusinessImpl(this.requestId, this.userId, this.login, this.description, this.status);
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

    setUserId(userId: number): RequestDatabase {
        this.userId = userId
        return this;
    }

    setRequestId(requestId: number): RequestDatabase {
        this.requestId = requestId
        return this;
    }

    setDescription(description: string): RequestDatabase {
        this.description = description
        return this;
    }

    setLogin(login: string): RequestDatabase {
        this.login = login
        return this;
    }

    setStatus(status: string): RequestDatabase {
        this.status = status
        return this;
    }
}