const mongoose = require('mongoose');
const { INTEGER } = require('sequelize');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    email: String,
    password: String,
    projectList: {
        projects: [{projectId: {type: String},
        projName: {type: String},
        projLink: {type: String}
    }]},
    name: String,
    college: String,
    year: Number,
    contact: Number,
    about: String,
    isInfoComplete: {type: Boolean, default: false}
});

module.exports = mongoose.model('Student', studentSchema);

// studentSchema.methods.EnrollToProject = function(project) {
//     const projIndex = this.projectList.projects.findIndex(p => {
//         return p.projectId.toString() === project._id.toString();
//     });

//     if (projIndex >= 0) {
//         console.log("Already Enrolled");
//     } else {
//         updatedProjectList.push({
//             projectId: project._id.toString()
//             //,projLink: // get input from html 
//         });
//     }
//     const updatedList = {
//         projectList: updatedProjectList
//     };
//     this.projectList = updatedList;
//     return this.save()
// };