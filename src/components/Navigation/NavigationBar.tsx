import {FC} from "react";
import {Link, Route} from "react-router-dom";
import Customer from "../Customer";

const NavigationBar: FC = () =>{
    return(
        <nav>
                <Link to="/">Home</Link>
                <Link to="/employee">Employee</Link>
                <Link to="/project">Projects</Link>
                <Link to="/customer">Customer</Link>
        </nav>
    )
}

export default NavigationBar;