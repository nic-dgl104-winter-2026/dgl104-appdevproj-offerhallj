import { User } from "../../dist/user/User.js";
export declare class UserRepository {
    private static _intance;
    private _db;
    static get Instance(): UserRepository;
    constructor();
    /** Open the USER_TABLE with indexedDB */
    private openDatabase;
    createUser(newUser: User): boolean;
}
//# sourceMappingURL=UserRepository.d.ts.map