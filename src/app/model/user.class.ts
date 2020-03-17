export class User{

    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    isAdmin: boolean;
    isReviewer: boolean;
    email: string;
    phone: string;

    constructor(id: number=0, userName: string="", email: string="",
                firstName: string="", isAdmin: boolean=null, isReviewer: boolean=null,
                lastName: string="", password: string="", phone: string="") {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.isAdmin = isAdmin;
        this.isReviewer = isReviewer;
        this.email = email;
        this.phone = phone;
    }
}
