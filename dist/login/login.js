var _a;
import { LoginService } from "../../dist/login/LoginService.js";
import { User } from "../../dist/user/User.js";
const login = LoginService.Intance;
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
(_a = document.getElementById("create-account-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", createUser);
/** Create a new user and try to add it to the database */
function createUser(e) {
    e.preventDefault();
    let newUser = new User(usernameInput.value, passwordInput.value, emailInput.value);
    login.createAccountAndLogin(newUser, createAccountAndLoginResponse);
}
/** Handle the result of the createUser operation */
function createAccountAndLoginResponse(result) {
    if (!result)
        console.log("failed to create the account");
}
//# sourceMappingURL=login.js.map