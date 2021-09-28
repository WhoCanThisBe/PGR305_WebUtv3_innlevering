import {FC} from "react";
import {IEmployee} from "../../interfaces/interfaces";


const EmployeeItem:FC<IEmployee> = ({firstName, lastName}) =>{

    return(
        <article>
            <p>Fornavn: {firstName}</p>
            <p>Etternavn: {lastName}</p>
        </article>
    )

}

export default EmployeeItem;