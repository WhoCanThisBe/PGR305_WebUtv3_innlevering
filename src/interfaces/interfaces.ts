interface IRegister{
    firstName: String;
    lastName: String;
}


interface IEmployee extends IRegister {
    image : string

}

interface ICostumer extends IRegister {
    number : String;
}

export type {IEmployee, ICostumer}