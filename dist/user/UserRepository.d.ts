import { User } from "../../dist/user/User.js";
export declare class UserRepository {
    private static _intance;
    private _db;
    static get Instance(): UserRepository;
    constructor();
    /** Open the USER_TABLE with indexedDB */
    private openDatabase;
    /** Attempt to add a user to the database and invoke the callback with the result and authorization token */
    createUser(newUser: User, callback: (result: boolean) => void): void;
    private createToken;
}
//# sourceMappingURL=UserRepository.d.ts.map