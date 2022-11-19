const exp = require('express');
const path = require('path');

const router = exp.Router();

const rootDir = require('../util/path');
const projectController = require('../controllers/projects');

router.get('/projects' , (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'home.html'));
    res.render('projects', {
        isAuthenticated: req.isLoggedIn
    });
});

router.post('/profile', projectController.postEnrollment); //profile page

module.exports = router;