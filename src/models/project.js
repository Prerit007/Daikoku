// const mongoose = require('mongoose');

// const Schema = mongoose()

// const mongodb = require('mongodb');
// const getDb = require('./util/database').getDb;

// const objectId = mongodb.ObjectId;

// class Project {
//     constructor(id, title, price, tags, deadline, info) {
//         this._id = id ? new objectId(id) : null;
//         this._title = title;
//         this._price = price;
//         this._tags = tags;
//         this._deadline = deadline;
//         this._info = info;
//     }

//     save() {
//         const db = getDb();
//         db.collection('projects').inssrtOne(this);
//     }

//     static findById(projId) {
//         const db = getDb();
//         return db.collection('projects').findOne({_id: new objectId(projId)});
//     }
// }

// module.exports = Project;