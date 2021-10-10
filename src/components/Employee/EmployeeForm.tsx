import React, {FC, useState} from "react";
import {Col} from "react-bootstrap";
import EmployeeList from "./EmployeeList";

const EmployeeForm: FC = () =>{

    const [name,setName] = useState("")
    const [surname,setSurname ] = useState("")
    const [list, setList] = useState(["bjarn Nilsen"]);

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        setName("");
        setSurname("");
        EmployeeList


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