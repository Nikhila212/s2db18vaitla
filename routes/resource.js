var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Barbeque_controller = require('../controllers/Barbeque');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Handbag ROUTES ///
// POST request for creating a Handbag.
router.post('/Barbeque', Barbeque_controller.Barbeque_create_post);
// DELETE request to delete Handbag.
router.delete('/Barbeque/:id', Barbeque_controller.Barbeque_delete);
// PUT request to update Handbag.
router.put('/Barbeque/:id', Barbeque_controller.Barbeque_update_put);
// GET request for one Handbag.
router.get('/Barbeque/:id', Barbeque_controller.Barbeque_detail);
// GET request for list of all Handbag.
router.get('/Barbeque', Barbeque_controller.Barbeque_list);
module.exports = router;