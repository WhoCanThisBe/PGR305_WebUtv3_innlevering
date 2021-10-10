import {FC, useContext} from "react";
import { Container, Col } from "react-bootstrap";
import EmployeeItem from "./EmployeeItem";
import {EmployeeContext} from "../../contexts/EmployeeContext";
import {EmployeeContextType} from "../../types/EmployeeContextType";



const EmployeeList: FC = () => {

    //naming should match with the ContextType
    const{employeeList} = useContext(EmployeeContext) as EmployeeContextType;

    const showEmployeeList = () =>{
        return employeeList.map((employee,thisKey) =>{
            return(
                    //so I dont forget
                    <Col key={thisKey}>
                       <EmployeeItem firstName={employee.firstName} lastName={employee.lastName} image ={employee.image}/>
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