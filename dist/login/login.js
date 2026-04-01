var _a;
import { UserRepository } from "../../dist/user/UserRepository.js";
const repo = UserRepository.Instance;
(_a = document.getElementById("create-account-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    repo.createUser();
});
//# sourceMappingURL=login.js.map