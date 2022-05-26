const db = {};

// data structure
// {
//     'schedules': [
//         {
//             'scheduleName': 'name',
//             'dateCreated':'date',
//             'scheduleItems': [
//                 {
//                     'imageSrc': 'url or ref',
//                     'altText': 'description',
//                     'imageLabel': 'label',
//                     'complete': 'boolean'
//                 },
//             ]
//         },
//     ],
// }

class Db {
    
    constructor() {
        this._schedulesCollection = new SchedulesCollection();
    }

    schedules() {
        return this._schedulesCollection;
    }
}

class SchedulesCollection {
    get() {}
    save() {}
    delete() {}
}

class Schedule {
    // id, name, dateCreated, scheduleItems
    constructor(name) {}
    get id() {} // auto-generated
    get dateCreated() {} // auto-populated on save
    get scheduleItems() {} // array of ScheduleItem objects
    resetSchedule() {}
}

class ScheduleItem {
    // imageSrc: string
    // altText: description
    // imageLabel: label
    // complete: boolean
    constructor() {}
    markComplete() {}
}