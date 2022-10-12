const exp = requires('express');
const path = require('path');

const router = exp.Router();

router.get('/about', (req, res, next) => {
    res.render('about');
});

exports.routes = router;