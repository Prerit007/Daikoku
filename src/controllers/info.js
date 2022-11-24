const { async } = require('postcss-js');
const Student = require('../models/student');

exports.saveInfo = async (req, res, next) => {
    let name = req.body.name;
    let about = req.body.about;
    let college = req.body.college;

    let student = await Student.findById(req.id);
    student.name = name;
    student.about = about;
    student.college = college;
    student.isInfoComplete = true;
    let tempstudent = await student.save();
    
    return res.redirect('/contact');
};