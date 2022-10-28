const exp = require('express');
const path = require('path');

const router = exp.Router();

const rootDir = require('../util/path');

router.get('/projects' , (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'home.html'));
    res.render('projects');
});

module.exports = router;