import localForage from "localforage";
export const storageConfig = {
        driver: localForage.INDEXEDDB,
        name: 'SlowexApp',
        version: 1.0,
        size: 4980736,
        storeName: 'slowex_App',
        description: 'baza lokalna apki Slowex',
}