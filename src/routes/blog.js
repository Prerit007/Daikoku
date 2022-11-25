const exp = require('express');

const router = exp.Router();

router.get('/blog', (req, res, next) => {
    res.render('blog', {
        isAuthenticated: req.isLoggedIn
    });

});

module.exports = router;