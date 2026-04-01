import { validateLogin } from "../dist/login/validateLogin.js";
import { LoginService } from "../dist/login/LoginService.js";

const logService = LoginService.Intance;

validateLogin();

document.getElementById("logout-button")?.addEventListener("click", logOut);

function logOut() {
    logService.logout();
}