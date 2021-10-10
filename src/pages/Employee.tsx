import {FC} from "react";
import EmployeeList from "../components/Employee/EmployeeList";
import {Col, Row} from "react-bootstrap";
import EmployeeForm from "../components/Employee/EmployeeForm";

const Employee: FC = ()=>{
    return(
        <section>
                <Row>
                    <Col>
                        <EmployeeForm/>
                    </Col>
                    <Col>
                        <EmployeeList/>
                    </Col>
                </Row>

        </section>
    )
}

export default Employee;