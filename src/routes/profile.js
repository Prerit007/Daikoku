const exp = require('express');

const router = exp.Router();

const profileController = require('../controllers/profile');

router.get('/profile', profileController.getProfile);
// router.get('/profile', (req, res, next) => {
//     res.render('profile', {
//         isAuthenticated: req.isLoggedIn
//     });
// });

module.exports = router;