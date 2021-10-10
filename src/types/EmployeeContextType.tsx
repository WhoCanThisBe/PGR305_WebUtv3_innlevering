import {IEmployee} from "../interfaces/interfaces";


export type EmployeeContextType = {
    employeeList : IEmployee[];
    addEmployee:( newEmployee : IEmployee) => void;
}