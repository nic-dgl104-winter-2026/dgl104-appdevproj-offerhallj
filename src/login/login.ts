import { UserRepository } from "../../dist/user/UserRepository.js";

const repo = UserRepository.Instance;

document.getElementById("create-account-button")?.addEventListener("click", () => {
    repo.createUser();
})