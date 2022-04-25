var express = require('express');
const Barbeque_controllers= require('../controllers/Barbeque');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

/* GET costumes for all instances view*/
router.get('/', Barbeque_controllers.Barbeque_view_all_Page);

/* GET costumes for one instance view*/
router.get('/detail', Barbeque_controllers.Barbeque_view_one_Page);

/* GET create Barbeque page */
router.get('/create', secured, Barbeque_controllers.Barbeque_create_Page);

/* GET update Barbeque page */
router.get('/update',secured, Barbeque_controllers.Barbeque_update_Page);

/* GET delete delete page */
router.get('/delete',secured, Barbeque_controllers.Barbeque_delete_Page);

module.exports = router;