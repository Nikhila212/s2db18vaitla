var express = require('express');
const Barbeque_controllers= require('../controllers/Barbeque');
var router = express.Router();

/* GET home page. */
router.get('/', Barbeque_controllers.Barbeque_view_all_Page);
module.exports = router;