var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var barbeque_controller = require('../controllers/barbeque');

/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);

/// Barbeque ROUTES ///
// POST request for creating a Barbeque.
router.post('/barbeque', barbeque_controller.barbeque_create_post);
// DELETE request to delete Barbeque.
router.delete('/barbeque/:id', barbeque_controller.barbeque_delete);
// PUT request to update Barbeque.
router.put('/barbeque/:id', barbeque_controller.barbeque_update_put);
// GET request for one Barbeque.
router.get('/barbeque/:id', barbeque_controller.barbeque_detail);
// GET request for list of all Barbeque items.
router.get('/barbeque', barbeque_controller.barbeque_list);

module.exports = router;