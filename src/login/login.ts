import { LoginService } from "../../dist/login/LoginService.js";
import { User } from "../../dist/user/User.js";

const login = LoginService.Intance;
const usernameInput = document.getElementById("username") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;

document.getElementById("create-account-form")?.addEventListener("submit", createUser);

/** Create a new user and try to add it to the database */
function createUser(e: SubmitEvent) {
    e.preventDefault();
    
    let newUser = new User(usernameInput.value, passwordInput.value, emailInput.value);
    login.createAccountAndLogin(newUser, createAccountAndLoginResponse);
}

/** Handle the result of the createUser operation */
function createAccountAndLoginResponse(result: boolean) {
    if (!result) console.log("failed to create the account");
}