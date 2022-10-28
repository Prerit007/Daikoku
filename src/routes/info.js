const exp = require('express');
const path = require('path');

const router = exp.Router();

const rootDir = require('../util/path');

router.get('/info', (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'about.html'));
    res.render('info');
});

module.exports = router;