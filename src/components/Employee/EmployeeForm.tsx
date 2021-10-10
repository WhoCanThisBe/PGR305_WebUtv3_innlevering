import React, {FC, useContext, useState} from "react";
import {Col} from "react-bootstrap";
import {EmployeeContext} from "../../contexts/EmployeeContext";
import {EmployeeContextType} from "../../types/EmployeeContextType";
import {IEmployee} from "../../interfaces/interfaces";

const EmployeeForm: FC = () =>{

    const [name,setName] = useState("")
    const [surname,setSurname ] = useState("")

    //naming should match with the ContextType
    const{addEmployee} = useContext(EmployeeContext) as EmployeeContextType;

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        const newEmployee : IEmployee = {
            firstName : name,
            lastName : surname,
            image : "18.jpg"

        }

        addEmployee(newEmployee);

        setName("");
        setSurname("");



    }


    return(
       <>
           <form onSubmit={handleSubmit}>
               <Col>
                   <h3>Register ny Ansatt</h3>
               </Col>
               <Col>
                   <label>
                       Fornavn:
                       <br/>
                       <input
                           type="text"
                           value={name}
                           placeholder={"fyll inn fornavn"}
                           onChange={(e) => setName(e.target.value)}
                           required
                           />
                   </label>
               </Col>
               <Col>
                   <label>
                       Lastname:
                       <br />
                       <input
                           type="text"
                           value={surname}
                           placeholder={"fyll inn etternavn"}
                           onChange={(e) => setSurname(e.target.value)}
                           required
                           />
                       </label>
               </Col>
               <Col>
                   <button
                       type={"submit"}
                   >
                       Registrer
                   </button>
               </Col>


           </form>
       </>
    )

}

export default EmployeeForm;