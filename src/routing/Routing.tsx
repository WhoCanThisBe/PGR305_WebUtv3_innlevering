import {FC} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Employee from "../pages/Employee";
import Project from "../pages/Project"
import Customer from "../pages/Customer";

const Routing: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/employee" component={Employee}/>
                <Route exact path="/project" component={Project}/>
                <Route exact path ="/customer" component={Customer}/>
                //TODO: Fix a better 404 when you have time
                <Route render={() => <h3>404 :(</h3>}/>
            </Switch>

        </BrowserRouter>
    )

}

export default Routing;