import {FC} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Employee from "../pages/Employee";

const Routing: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/employee" component={Employee}/>
                //TODO: Fix a better 404 when you have time
                <Route render={() => <h3>404 :(</h3>}/>
            </Switch>

        </BrowserRouter>
    )

}

export default Routing;