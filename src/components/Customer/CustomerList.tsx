import {FC, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ICostumer} from "../../interfaces/interfaces";

const CustomerList: FC = () =>{

    const [customer] = useState<Array<ICostumer>>(
        [
            {firstName: "Olav", lastName: "Nordmann", number:"99 999 999"},
            {firstName: "Kari", lastName: "Nordmann",  number:"99 999 999"},
            {firstName: "Espen", lastName: "Askeland", number:"99 999 999"}

        ]

    )

    const showCustomerList = () =>{
        return customer.map((customer,key) =>{
            return(
                <Container key={key}>
                    <Col>
                        <div >
                            <p>Fornavn: {customer.firstName}</p>
                            <p>Etter navn: {customer.lastName}</p>
                            <p>Telefon nummer : {customer.number}</p>
                        </div>
                    </Col>
                </Container>
            )
        })
    }

    return(
        <>
            <h2>Kunde Liste</h2>
            <Row>
                {showCustomerList()}
            </Row>
        </>
    )
}

export default CustomerList;