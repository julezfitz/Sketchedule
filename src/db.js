import Dexie from 'dexie';

export const db = new Dexie('sketcheduleDatabase');
db.version(1).stores({
  scheduleItems: '++id, imageSrc, altText, imageLabel, complete',
  schedules: '++id, name, dateCreated',
});

// class SchedulesCollection {
//     get() {}
//     save() {}
//     delete() {}
// }

// class Schedule {
//     // id, name, dateCreated, scheduleItems
//     constructor(name) {}
//     get id() {} // auto-generated
//     get dateCreated() {} // auto-populated on save
//     get scheduleItems() {} // array of ScheduleItem objects
//     resetSchedule() {}
// }
