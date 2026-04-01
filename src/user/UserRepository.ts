import { User } from "../../dist/user/User.js";

const USER_TABLE = "user_table";

export class UserRepository {
    private static _intance: UserRepository;
    private _db: IDBDatabase | undefined;
    
    static get Instance(): UserRepository {
        if (UserRepository._intance == null) UserRepository._intance = new UserRepository();
        return UserRepository._intance;
    }
    
    constructor() {
        this.openDatabase();
    }
    
    // I used this article to help get started with IndexedDB
    // https://blog.logrocket.com/using-indexeddb-complete-guide/
    /** Open the USER_TABLE with indexedDB */
    private openDatabase() {
        const request = window.indexedDB.open(USER_TABLE, 1);
    
        request.addEventListener("error", () => {
            console.log("Error opening database");
            }
        );
    
        request.addEventListener("success", () => {
            console.log("Successfully opened database");    
            this._db = request.result;
            }
        );
    
        // I was having an issue getting result from the EventTarget; 
        // after doing a bit of post I found this article that said to typecast it
        // https://stackoverflow.com/questions/75953640/how-to-get-event-target-result-in-javascript-indexdb-typescript-working
        request.addEventListener("upgradeneeded", init => {
            this._db = (init.target as IDBOpenDBRequest).result;
    
            this._db.onerror = () => {
                console.error('Error loading database.');
            };

            const table = this._db?.createObjectStore(USER_TABLE, { keyPath: "id", autoIncrement:true});
            table?.createIndex("username", "username", { unique: true});
            table?.createIndex("password", "password", { unique: false});
            table?.createIndex("email", "email", { unique: true});
            table?.createIndex("activeToken", "activeToken", { unique: false});
        });
    
    }

    // I realized in my testing that returning a value from this method wasn't working because the value was being returned before the database finished processing
    // rather than returning a value, I decided to implement a callback so I can handle the result when the database is finished 
    public createUser(newUser: User, callback: (result: boolean, auth: string) => void) {
        const transaction = this._db?.transaction([USER_TABLE], "readwrite");
        const objectStore = transaction?.objectStore(USER_TABLE);
        const query = objectStore?.add(newUser);
        query?.addEventListener("success", () => {
            callback(true, "auth");
        });

        query?.addEventListener("error", () => {
            callback(false, "");
        })
    }
}