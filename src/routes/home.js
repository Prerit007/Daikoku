const exp = require('express');
const path = require('path');

const router = exp.Router();

const rootDir = require('../util/path');

router.get('/home' , (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

module.exports = router;