import {FC, useState} from "react";

const EmployeeForm: FC = () =>{

    const [name,SetName] = useState("")
    const [surname,setSurname ] = useState("")
    const [list, setList] = useState(["bjarn Nilsen"]);

    return(
        <>
            //TODO: Fix this form
            <section>
                <h3>Registering av ny ansatt</h3>
            </section>
        </>
    )

}

export default EmployeeForm;