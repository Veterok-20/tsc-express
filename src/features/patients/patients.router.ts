import { Router } from "express";
import { CreateNewPatient, GetAllPatients, GetPatientById } from "./patients.controller";

const patientsRouter = Router()

patientsRouter.get('/api/patients', GetAllPatients)

patientsRouter.get('/api/patient/:id', GetPatientById)

patientsRouter.post('/api/patient', CreateNewPatient)

export default patientsRouter  