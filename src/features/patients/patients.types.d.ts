import { Request } from "express";

export interface IRequestId extends Request {
    params: {
        id: string
    }
}

export interface IPatient {
    LastName: string
    Name: string
    Patronymic: string
    Diagnosis: string    
}

export interface IRequestPatient extends Request {
    body: IPatient
}