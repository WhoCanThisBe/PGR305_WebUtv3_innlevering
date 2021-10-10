import {createContext, FC, useState} from "react";
import {EmployeeContextType} from "../types/EmployeeContextType";
import {IEmployee} from "../interfaces/interfaces";


export const EmployeeContext = createContext <EmployeeContextType | null> (null);

export const EmployeeProvider : FC = ({children}) =>{

    const[employeeList, setEmployee] = useState<IEmployee[]>([
        {firstName: "Olav", lastName: "Nordmann"},
        {firstName: "Kari", lastName: "Nordmann"},
        {firstName: "Espen", lastName: "Askelsand"}

    ]);

    //naming should match with the ContextType
    const addEmployee = (newEmployee: IEmployee) =>{

        setEmployee([newEmployee, ...employeeList])
    }

    return(
        //naming should match with the ContextType
        <EmployeeContext.Provider value={{employeeList,addEmployee}}>
            {children}
        </EmployeeContext.Provider>
    )

}

