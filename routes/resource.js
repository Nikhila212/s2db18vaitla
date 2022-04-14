var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var barbeque_controller = require('../controllers/barbeque');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// barbeque ROUTES ///
// POST request for creating a barbeque.
router.post('/barbeque', barbeque_controller.barbeque_create_post);
// DELETE request to delete barbeque.
router.delete('/barbeque/:id', barbeque_controller.barbeque_delete);
// PUT request to update barbeque.
router.put('/barbeque/:id',
barbeque_controller.barbeque_update_put);
// GET request for one barbeque.
router.get('/barbeque/:id', barbeque_controller.barbeque_detail);
// GET request for list of all barbeque items.
router.get('/barbeque', barbeque_controller.barbeque_list);
module.exports = router;