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
    }

    getRole() {
        return ROLES.list[ROLES.AUTHOR_INDEX];
    }
}

export class AdminUser extends User{
    constructor(Id,firstName,lastName){
        super(Id,firstName,lastName);
    }
    getRole() {
        return ROLES.list[ROLES.ADMIN_INDEX];
    }
}
