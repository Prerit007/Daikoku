const Student = require('../models/student');

exports.getProfile = async (req, res, next) => {
    let studentData = await Student.findById(req.id);

    res.render('profile', {
        path: '/profile',
        isAuthenticated: req.isLoggedIn,
        student: studentData,
    });
};