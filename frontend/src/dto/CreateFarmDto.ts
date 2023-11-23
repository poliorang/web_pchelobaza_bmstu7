import {CreateHoneyDto} from "./CreateHoneyDto";

export type CreateFarmDto = {
    farmId: number,
    name: string,
    description: string,
    address: string,
    userLogin: string,
    userId: number,
    honey: Array<CreateHoneyDto>
}