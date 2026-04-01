export class User {
    public id: number | undefined;
    public username: string = "";
    public password: string = "";
    public email: string = "";
    public activeToken: string = "";

    constructor(username: string, password: string, email: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public setActiveToken(value: string) {
        this.activeToken = value;
    }
}