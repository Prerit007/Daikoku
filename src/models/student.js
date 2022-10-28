// const mongodb = require('mongodb');

// const objectId = mongodb.ObjectId;

// class Student {
//     constructor(id, username, email, projId) {
//         this._id = id ? new objectId(id) : null;
//         this._name = username;
//         this._email = email;
//         this._projdId = projId;
//     }

//     save() {
//         const db = getDb();
//         db.collection('students').inssrtOne(this);
//     }

//     static findById(stdId) {
//         const db = getDb();
//         return db
//         .collection('students')
//         .findOne({_id: new objectId(stdId)})
//         .then(user => {
//             return user;
//         })
//         .catch(err => {
//             console.log(err);
//         });
//     }
// }

// module.exports = Student;