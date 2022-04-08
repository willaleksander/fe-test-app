/**
 * A model for an individual User
 */
 export class User {
     id: number;
     first_name: string;
     last_name: string;
     email: string;
     username: string;
     created_date: string;
     id_status: number;
    
     /**
      * Constructor with the required vars
      * @param username
      * @param first_name 
      * @param email 
      */
    constructor(username: string, first_name: string, email: string) {
        this.username = username;
        this.first_name = first_name;
        this.email = email;
    }
  }