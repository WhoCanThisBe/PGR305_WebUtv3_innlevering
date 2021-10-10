import {FC, useContext, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import {IEmployee} from "../../interfaces/interfaces";
import EmployeeItem from "./EmployeeItem";
import EmployeeForm from "./EmployeeForm";
import {EmployeeContext} from "../../contexts/EmployeeContext";
import {EmployeeContextType} from "../../types/EmployeeContextType";



const EmployeeList: FC = () => {

    //naming should match with the ContextType
    const{employeeList} = useContext(EmployeeContext) as EmployeeContextType;

    const showEmployeeList = () =>{
        return employeeList.map((employee,key) =>{
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