import {FC} from "react";
import {IEmployee} from "../../interfaces/interfaces";


const EmployeeItem:FC<IEmployee> = ({firstName, lastName,image}) =>{

    return(
        <article style={{border: "2px solid"}}>
            <p>Fornavn: {firstName}</p>
            <p>Etternavn: {lastName}</p>
            <img className="img-fluid" src={require(`../../assets/images/${image}`).default} alt=""/>
        </article>
    )

}

export default EmployeeItem;