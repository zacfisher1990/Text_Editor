import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');

  const jateDb = await openDB('jate', 1); // create connection to DB
  const tx = jateDb.transaction('jate', 'readwrite'); // create transation for jate DB readwrite
  const store = tx.objectStore('jate'); 
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log(result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

  const jateDb = await openDB('jate', 1); // create connection to DB
  const tx = jateDb.transaction('jate', 'readonly'); // create transation for jate DB readonly
  const store = tx.objectStore('jate'); 
  const request = store.getAll(); // getAll method for retrieving data in DB
  const result = await request;
  console.log(result?.value);
  return result?.value;
}; 

initdb();
