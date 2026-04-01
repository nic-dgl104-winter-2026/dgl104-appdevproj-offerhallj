import { UserRepository } from "../../dist/user/UserRepository.js";
import { User } from "../../dist/user/User.js";

const repo = UserRepository.Instance;
const usernameInput = document.getElementById("username") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;

document.getElementById("create-account-form")?.addEventListener("submit", createUser);

/** Create a new user and try to add it to the database */
function createUser(e: SubmitEvent) {
    e.preventDefault();
    
    let newUser = new User(usernameInput.value, passwordInput.value, emailInput.value);
    repo.createUser(newUser, onCreateUserResponse);
}

/** Handle the result of the createUser operation */
function onCreateUserResponse(result: boolean, auth: string) {
    if (result) console.log("The user was created!");
    else console.log("An error occurred!");
}