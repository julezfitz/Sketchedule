import Dexie from 'dexie';

export const db = new Dexie('sketcheduleDatabase');

db.version(2).stores({
  scheduleItems: '++id, imageSrc, altText, imageLabel, complete, scheduleID',
  schedules: '++id, name, dateCreated',
});
