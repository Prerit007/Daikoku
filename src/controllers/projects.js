const Student = require('../models/student');

exports.saveP1 = async (req, res, next) => {
    let linkP1 = req.body.proj1;

    let student = await Student.findById(req.id);
    student.projectList['projects'].push({projectId: "635a859b9e8f14404ec56f9b",
    projName: "Chat Bot",
    projLink: linkP1});
    await student.save();
    res.redirect('/profile');
};

exports.saveP2 = async (req, res, next) => {
    let linkP2 = req.body.proj2;

    let student = await Student.findById(req.id);
    student.projectList['projects'].push({projectId: "635a88ef9e8f14404ec56f9e",
    projName: "Code Editor",
    projLink: linkP2});
    await student.save();
    res.redirect('/profile');
};

exports.saveP3 = async (req, res, next) => {
    let linkP3 = req.body.proj3;

    let student = await Student.findById(req.id);
    student.projectList['projects'].push({projectId: "635a89ca9e8f14404ec56f9f",
    projName: "UI Design",
    projLink: linkP3});
    await student.save();
    res.redirect('/profile');
};

exports.saveP4 = async (req, res, next) => {
    let linkP4 = req.body.proj4;

    let student = await Student.findById(req.id);
    student.projectList['projects'].push({projectId: "635a8a7b9e8f14404ec56fa1",
    projName: "Flappy Bird Game",
    projLink: linkP4});
    await student.save();
    res.redirect('/profile');
};