import {FC, useState} from "react";
import {IEmployee} from "../interfaces/interfaces";


const Employee: FC = () => {
    const [employee] = useState<Array<IEmployee>>(
        [
            {firstName: "Olav", lastName: "Nordmann"},
            {firstName: "Kari", lastName: "Nordmann"},
            {firstName: "Espen", lastName: "Askeland"}

        ]

    )

    return(

        <section>
            EmployeeList
        </section>

    )

}


export default Employee;