import { LoginService } from "../login/LoginService.js";
import { ViewRepository } from "./ViewRepository.js";
import { View } from "./View.js";
const logService = LoginService.Instance;
export class ViewService {
    constructor() {
        this._repo = new ViewRepository();
    }
    static get Instance() {
        if (ViewService._instance == null)
            ViewService._instance = new ViewService();
        return ViewService._instance;
    }
    createView(view, callback) {
        const user = this.getUser();
        if (user == undefined) {
            callback(false, undefined);
            return;
        }
        // remove the view's ID to ensure it saves as a new view and doesn't override the existing view
        view = View.newFromExistingView(view);
        view.user = user;
        view.isChanged = false;
        this._repo.createView(view, callback);
    }
    saveView(view) {
        const user = this.getUser();
        if (user == undefined) {
            console.log("Error: no user was found");
            return;
        }
        this._repo.saveView(view, (r, msg) => {
            console.log(msg);
            if (r) {
                view.isChanged = false;
            }
        });
    }
    getAllViewsForUser(callback) {
        const user = this.getUser();
        if (user == undefined) {
            callback(false, "No user found", []);
            return;
        }
        this._repo.getAllViewsForUser(user, callback);
    }
    deleteView() {
    }
    /** Try to get the username for the current user; print an error if undefined and return the result */
    getUser() {
        const username = logService.getCurrentUser();
        if (username == undefined) {
            console.log("Error! You must be logged in to create a task.");
        }
        return username;
    }
}
//# sourceMappingURL=ViewService.js.map