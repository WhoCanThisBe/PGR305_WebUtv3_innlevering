import {FC} from "react";
import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

const NavigationBar: FC = () =>{
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>ProjectSys</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/employee">Employee</Nav.Link>
                    <Nav.Link as={Link} to="/project">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/customer">Customer</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;