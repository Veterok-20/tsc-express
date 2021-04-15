import { sequelize } from "../../service/db-connection";
import { Model, DataTypes } from "sequelize";
import { IPatient } from "./patients.types";


export default class Patient extends Model<IPatient> implements IPatient {
    public LastName!: string;
    public Name!: string;
    public Patronymic!: string;
    public Diagnosis!: string;
} 

Patient.init({
    LastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Patronymic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Diagnosis: {
        type: DataTypes.STRING,
        allowNull: false  
    }
}, {
    tableName: 'patients',
    sequelize
})