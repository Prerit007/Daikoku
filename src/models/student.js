// var mongoose = require("mongoose");
// var passportLocalMongoose = require("passport-local-mongoose");

// var studentSchema = new mongoose.Schema({
//     username:String,
//     password:String,
//     // projectList: {
//     //     projects: [{projectId: {type: Schema.Types.ObjectId, ref: 'Projects'},
//     //     projLink: {String}}]
//     // }
// });

// studentSchema.plugin(passportLocalMongoose);

// module.exports = mongoose.model("Students",studentSchema);






const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    email: String,
    password: String,
    projectList: {
        projects: [{projectId: {type: Schema.Types.ObjectId, ref: 'Project'},
        projLink: {String}
    }]},
    about: String,
    college: String,
    isInfoComplete: {type: Boolean, default: false}
});

studentSchema.methods.EnrollToProject = function(project) {
    const projIndex = this.projectList.projects.findIndex(p => {
        return p.projectId.toString() === project._id.toString();
    });

    if (projIndex >= 0) {
        console.log("Already Enrolled");
    } else {
        updatedProjectList.push({
            projectId: project._id.toString()
            //,projLink: // get input from html 
        });
    }
    const updatedList = {
        projectList: updatedProjectList
    };
    this.projectList = updatedList;
    return this.save()
};

module.exports = mongoose.model('Student', studentSchema);






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