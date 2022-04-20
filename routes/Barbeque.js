var express = require('express');
const Barbeque_controllers= require('../controllers/Barbeque');
var router = express.Router();

/* GET costumes for all instances view*/
router.get('/', Barbeque_controllers.Barbeque_view_all_Page);

/* GET costumes for one instance view*/
router.get('/detail', Barbeque_controllers.icecream_view_one_Page);

module.exports = router;