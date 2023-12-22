import { ROLES } from "../../constants";
import { AuthorUser, User } from "./User";

/* Singleton */
export class UserFactory{
    static userFactory= new UserFactory();//null;
    user=new User('','','');//null;
    constructor(){}
    static getInstance(){
        if(this.userFactory==null)
            this.userFactory= new UserFactory();
        return this.userFactory;
    }
    createUser(data){
        console.log(data);
        console.log(data.role);
        console.log(ROLES.list[ROLES.AUTHOR_INDEX]);

        if(data.role==ROLES.list[ROLES.AUTHOR_INDEX])
            this.user= new AuthorUser(data.Id,data.FirstName,data.LastName);
        console.log(this.user.getFirstName());
    }
    getUser=()=>this.user;
}
