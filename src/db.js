import Dexie from 'dexie';

const db = new Dexie('sketcheduleDatabase');

export default db;

db.version(2).stores({
  scheduleItems: '++id, imageSrc, altText, imageLabel, complete, scheduleID',
  schedules: '++id, name, dateCreated',
});
