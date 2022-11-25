const { async } = require('postcss-js');
const Student = require('../models/student');

exports.saveInfo = async (req, res, next) => {
    let name = req.body.name;
    let college = req.body.college;
    let year = req.body.year;
    let contact = req.body.contact;
    let about = req.body.about;

    let student = await Student.findById(req.id);
    student.name = name;
    student.college = college;
    student.year = year;
    student.contact = contact;
    student.about = about;
    student.isInfoComplete = true;
    let tempstudent = await student.save();
    
    return res.redirect('/profile');
};