import { ROLES } from "../../constants";

export class User{
     constructor(Id,firstName,lastName){
        this.Id=Id;
        this.firstName= firstName;
        this.lastName= lastName;
     }

    getRole(){};
    getFirstName=()=>this.firstName;
    getLastName=()=>this.lastName;

}
export class AuthorUser extends User{
    constructor(Id,firstName,lastName){
        super(Id,firstName,lastName);
        this.articles=[];
    }

    getRole() {
        return ROLES.list[ROLES.AUTHOR_INDEX];
    }
}

