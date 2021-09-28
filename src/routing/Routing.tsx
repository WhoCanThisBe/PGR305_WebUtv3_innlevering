import {FC} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import EmployeeList from "../components/Employee/EmployeeList";
import Project from "../pages/Project"
import Customer from "../pages/Customer";
import NavigationBar from "../components/Navigation/NavigationBar";
import {Container} from "react-bootstrap";

const Routing: FC = () => {
    return (
        <BrowserRouter>
            <NavigationBar/>
            <Container>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/employee" component={EmployeeList}/>
                    <Route path="/project" component={Project}/>
                    <Route path ="/customer" component={Customer}/>
                    //TODO: Fix a better 404 when you have time
                    <Route render={() => <h3>404 :(</h3>}/>
                </Switch>
            </Container>

        </BrowserRouter>
    )

}

export default Routing;