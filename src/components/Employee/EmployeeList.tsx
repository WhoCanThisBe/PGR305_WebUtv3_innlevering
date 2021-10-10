import {FC, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import {IEmployee} from "../../interfaces/interfaces";
import EmployeeItem from "./EmployeeItem";
import EmployeeForm from "./EmployeeForm";



const EmployeeList: FC = () => {
    const [employee,setEmployee] = useState<Array<IEmployee>>(
        [
            {firstName: "Olav", lastName: "Nordmann"},
            {firstName: "Kari", lastName: "Nordmann"},
            {firstName: "Espen", lastName: "Askeland"}

        ]

    )

    const showEmployeeList = () =>{
        return employee.map((employee,key) =>{
            return(
                    <Col md={6} lg={4} xl={3} key={key}>
                       <EmployeeItem firstName={employee.firstName} lastName={employee.lastName}/>
                    </Col>
            )
        })
    }

    return(
        <Container>
            <section>
                <h2>Ansatt Liste</h2>
                {showEmployeeList()}
            </section>
        </Container>
    )

}


export default EmployeeList;