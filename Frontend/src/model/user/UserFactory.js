import { ROLES } from "../../constants";
import { AdminUser, AuthorUser, User } from "./User";

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
        if(data.type==ROLES.list[ROLES.AUTHOR_INDEX])
            this.user= new AuthorUser(data.id,data.firstName,data.lastName);
        else if(data.type ==ROLES.list[ROLES.ADMIN_INDEX])
            this.user= new AdminUser(data.id,data.firstName,data.lastName);
            
    }
    getUser=()=>this.user;
}
