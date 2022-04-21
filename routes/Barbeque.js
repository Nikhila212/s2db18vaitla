var express = require('express');
const Barbeque_controllers= require('../controllers/Barbeque');
var router = express.Router();

/* GET costumes for all instances view*/
router.get('/', Barbeque_controllers.Barbeque_view_all_Page);

/* GET costumes for one instance view*/
router.get('/detail', Barbeque_controllers.Barbeque_view_one_Page);

/* GET create Barbeque page */
router.get('/create', Barbeque_controllers.Barbeque_create_Page);

/* GET create update page */
router.get('/update', Barbeque_controllers.Barbeque_update_Page);

/* GET delete delete page */
router.get('/delete', Barbeque_controllers.Barbeque_delete_Page);

module.exports = router;