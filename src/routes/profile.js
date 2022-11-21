const exp = require('express');

const router = exp.Router();

router.get('/profile', (req, res, next) => {
    res.render('profile', {
        isAuthenticated: req.isLoggedIn
    });
});

module.exports = router;