export declare class UserRepository {
    private static _intance;
    private _db;
    static get Instance(): UserRepository;
    constructor();
    /** Open the USER_TABLE with indexedDB */
    private openDatabase;
    createUser(): boolean;
}
//# sourceMappingURL=UserRepository.d.ts.map