import { RequestHandler, Request, Response } from "express";
import Patient from "./patients.model";
import { IRequestId, IRequestPatient } from "./patients.types";

export const GetAllPatients: RequestHandler = async (req, res) => {
    const patients = await Patient.findAll()
    res.send(patients)
}

export const GetPatientById = async ({params: {id: patientId}}: IRequestId, res: Response) => {
    const patient = await Patient.findByPk(patientId)
    if (patient == null) return res.status(404).send('Can\'t find this patient')
    res.send(patient)
}

export const CreateNewPatient = async ({body: newPatient}: IRequestPatient, res: Response) => {
    const patientFromDb = await Patient.create(newPatient)
    res.status(201).send(patientFromDb)
} 