export class User {
    id: number;
    name: string;
    email: string;
    mobile: number;
    username: string;
    password: string;

    constructor(id: number,
                name: string,
                email: string,
                mobile: number,
                username: string,
                password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.username = username;
        this.password = password;
    }
}