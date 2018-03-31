export default class IndexedDB {
    async list(cb) {
        let db = await this._init();
        let customers = [];

        let transaction = db.transaction(["name"]);
        let objectStore = transaction.objectStore("name");
        
        objectStore.openCursor().onsuccess = event => {
            var cursor = event.target.result;
            if (cursor) {
                customers.push(cursor.value);
                cursor.continue();
            }
            else {
                cb(customers);
            }
        };
    }

    _init() {
        return new Promise( (resolve, reject ) => {
            let request = window.indexedDB.open("MyTestDatabase", 3);
            
            request.onsuccess = event => {
                let db = event.target.result;
                resolve(db);
            };
        })
        
    }
}
