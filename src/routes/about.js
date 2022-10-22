const exp = require('express');
const path = require('path');

const router = exp.Router();

const rootDir = require('../util/path');

router.get('/about', (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'about.ejs'));
    res.render('about');
});

module.exports = router;