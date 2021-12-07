// myDB.indexedDB.open('m2i','contacts');
var myDB = {}
myDB.indexedDB = {};
myDB.indexedDB.db = null  // DB Index
myDB.indexedDB.callback = null // Fonction de rappel pour l'affichage des données

/**
 * Gestion des errors renvoyé par la db IndexedDB
 * @param {*} e error 
 */
myDB.indexedDB.onerror = function (e) {
    console.log(e);

};
/**
 * Ouverture ou création de la base de données
 * @param {*} databasename nom de la base de données IndexedDB
 * @param {*} tablename nom de la collection de données
 */

myDB.indexedDB.open = function (databasename, tablename) {
    let version = 1; // à changer si on veut recréer la DB
    let request = indexedDB.open(databasename, version)
    
    //Call only if version is different 
    request.onupgradeneeded = function (e) {
        let db = e.target.result; // 
        e.target.transaction.onerror = myDB.indexedDB.onerror;
        if (db.objectStoreNames.contains(tablename)) {
            db.deleteObjectStore(tablename)
        }
        db.createObjectStore(tablename, {
            keyPath: 'id',
            autoIncrement: true

        });

    }
    request.onsuccess = function (e) {
        myDB.indexedDB.db = e.target.result;
        myDB.indexedDB.read(tablename)
        

    }
    request.onerror = myDB.indexedDB.onerror;


}
/**
 * Insérer des données dans le store 
 * @param {*} tablename nom du store de données
 * @param {*} data données à insérer au format JSON
 */
myDB.indexedDB.create = function (tablename, data) {
    let db = myDB.indexedDB.db;
    let transaction = db.transaction([tablename], 'readwrite')
    let store = transaction.objectStore(tablename);
    let request = store.add(data);
    request.onsuccess = function (e) {
        myDB.indexedDB.read(tablename);
    }

    request.onerror = myDB.indexedDB.onerror;

}
/**
 * Lit des données dans le store 
 * @param {*} tablename nom du store de données
 */
myDB.indexedDB.read = function (tablename) {
    let db = myDB.indexedDB.db;
    let transaction = db.transaction([tablename], 'readwrite')
    let store = transaction.objectStore(tablename);
    let key = IDBKeyRange.lowerBound(0);
    let cursor = store.openCursor(key);
    cursor.onsuccess = function (e) {
        let result = e.target.result;
        if (!!result == false) return;
        /**
            console.log(result);
        */
        myDB.indexedDB.callback(result.value);
        result.continue();

    };
    cursor.onerror = myDB.indexedDB.onerror;

}

/**
 * Delete des données dans le store 
 * @param {*} tablename nom du store de données
 * @param {*} data données à insérer au format JSON
 */
 myDB.indexedDB.delete = function (tablename, id) {
    let db = myDB.indexedDB.db;
    let transaction = db.transaction([tablename], 'readwrite')
    let store = transaction.objectStore(tablename);
    let request = store.delete(id);
    request.onsuccess = function (e) {
        //myDB.indexedDB.read(tablename);
    }

    request.onerror = myDB.indexedDB.onerror;

}

/**
 * Update a data
 * @param {*} tablename nom du store de données
 * @param {*} id onnées à insérer au format JSON
 */
myDB.indexedDB.update = function (tablename, id) {
    let db = myDB.indexedDB.db;
    let transaction = db.transaction([tablename], 'readwrite')
    let store = transaction.objectStore(tablename);
    let request = store.put(id);
    request.onsuccess = function (e) {
        //myDB.indexedDB.read(tablename);
    }

    request.onerror = myDB.indexedDB.onerror;

}

