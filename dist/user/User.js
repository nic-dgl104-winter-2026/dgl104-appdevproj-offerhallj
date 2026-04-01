export class User {
    constructor(username, password, email) {
        this.username = "";
        this.password = "";
        this.email = "";
        this.activeToken = "";
        this.username = username;
        this.password = password;
        this.email = email;
    }
    setActiveToken(value) {
        this.activeToken = value;
    }
}
//# sourceMappingURL=User.js.map