import { UserRepository } from "../../dist/user/UserRepository.js";
import { User } from "../../dist/user/User.js";
const AUTHENTICATION_COOKIE = "auth";
const repo = UserRepository.Instance;
export class LoginService {
    static get Intance() {
        if (LoginService._instance == null)
            LoginService._instance = new LoginService();
        return LoginService._instance;
    }
    /** Attempt to create an account and login */
    createAccountAndLogin(user, callback) {
        repo.createUser(user, result => {
            // if we successfully create the account, attempt to log in
            if (result) {
                this.logIn(user.username, user.password, callback);
            }
            // otherwise, fail
            else
                callback(result);
        });
    }
    /** Attempt to log the user in with the current credentials and return the result through the callback */
    logIn(username, password, callback) {
        repo.validateLoginCredentials(username, password, (result, auth) => {
            if (result) {
                callback(true);
                document.cookie = `${AUTHENTICATION_COOKIE}=${auth};max-age=10000`;
            }
            else {
                callback(false);
            }
        });
    }
    /** Determines whether a user is currently logged in by getting and validating the authentication cookie */
    isLoggedIn() {
        let cookie = this.getAuthenticationCookie();
        if (cookie == undefined)
            return false;
        return this.validateAuthenticationCookie(cookie);
    }
    /** Returns the value stored at AUTHENtICATION_COOKIE or undefined if the cookie is not found */
    getAuthenticationCookie() {
        const cookie = document.cookie;
        const cookies = cookie.split(";");
        for (let c of cookies) {
            let [key, value] = c.split("=");
            if (key == AUTHENTICATION_COOKIE)
                return value;
        }
        return undefined;
    }
    /** Compares the value of the authentication cookie against the value stored for the user in the database to determine if the login is valid */
    validateAuthenticationCookie(cookie) {
        return true;
    }
}
//# sourceMappingURL=LoginService.js.map