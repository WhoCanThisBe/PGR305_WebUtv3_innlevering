import {FC, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import {IEmployee} from "../../interfaces/interfaces";



const EmployeeList: FC = () => {
    const [employee] = useState<Array<IEmployee>>(
        [
            {firstName: "Olav", lastName: "Nordmann"},
            {firstName: "Kari", lastName: "Nordmann"},
            {firstName: "Espen", lastName: "Askeland"}

        ]

    )

    const showEmployeeList = () =>{
        return employee.map((employee,key) =>{
            return(
                <Container>
                    <Col md={6} lg={4} xl={3} key={key}>
                        <div>
                            <p>Fornavn: {employee.firstName}</p>
                            <p>Etter navn: {employee.lastName}</p>
                        </div>
                    </Col>
                </Container>
            )
        })
    }

    return(
        <>
            <h2>Ansatt Liste</h2>
            <Row>
                {showEmployeeList()}
            </Row>
        </>
    )

}


export default EmployeeList;