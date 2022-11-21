const Student = require('../models/student');

exports.saveP1 = async (req, res, next) => {
    let linkP1 = req.body.proj1;

    let student = await Student.findById(req.id);
    student.projectList['projects'].push({projectId: "635a859b9e8f14404ec56f9b",
    projLink: linkP1});
    await student.save();
    res.redirect('/profile');
};