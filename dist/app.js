var _a;
import { validateLogin } from "../dist/login/validateLogin.js";
import { LoginService } from "../dist/login/LoginService.js";
const logService = LoginService.Intance;
validateLogin();
(_a = document.getElementById("logout-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", logOut);
function logOut() {
    logService.logout();
}
//# sourceMappingURL=app.js.map