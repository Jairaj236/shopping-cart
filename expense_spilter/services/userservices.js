import { User } from '../modules/user.js'

export class UserServices {
    constructor(){
        this.users = new Map()
    }

    addUser(name){
          if(!name){
            throw new Error("name is required")
          }
          const trimmedName = name.trim();
           
          if(this.users.has(trimmedName)){
            throw new Error('user is alredy exists')
          }
         
            const user = new User(trimmedName)
          this.users.set(trimmedName, user);

           return user;

    }

    getUser(name){
       return this.users.get(name)
    }
    getAllUsers(){
        return Array.from(this.users.values())
    }
   getUserNames() {
        return Array.from(this.users.keys());
    }

    hasUser(name) {
        return this.users.has(name);
    }

    getUserCount() {
        return this.users.size;
    }

    clear() {
        this.users.clear();
    }

    importUsers(userData) {
        if (!Array.isArray(userData)) {
            throw new Error('User data must be an array');
        }

        userData.forEach(userData => {
            if (userData && userData.name) {
                this.users.set(userData.name, new User(userData.name));
            }
        });
    }
}

  