var _a;
import { UserRepository } from "../../dist/user/UserRepository.js";
import { User } from "../../dist/user/User.js";
const repo = UserRepository.Instance;
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
(_a = document.getElementById("create-account-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", createUser);
/** Create a new user and try to add it to the database */
function createUser(e) {
    e.preventDefault();
    let newUser = new User(usernameInput.value, passwordInput.value, emailInput.value);
    repo.createUser(newUser, onCreateUserResponse);
}
/** Handle the result of the createUser operation */
function onCreateUserResponse(result, auth) {
    if (result)
        console.log("The user was created!");
    else
        console.log("An error occurred!");
}
//# sourceMappingURL=login.js.map