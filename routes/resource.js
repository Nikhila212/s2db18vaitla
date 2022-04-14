var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var Barbeque_controller = require('../controllers/Barbeque');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// Barbeque ROUTES ///
// POST request for creating a Barbeque.
router.post('/Barbeques', Barbeque_controller.Barbeque_create_post);
// DELETE request to delete Barbeque.
router.delete('/Barbeques/:id', Barbeque_controller.Barbeque_delete);
// PUT request to update Barbeque.
router.put('/Barbeques/:id', Barbeque_controller.Barbeque_update_put);
// GET request for one Barbeque.
router.get('/Barbeques/:id', Barbeque_controller.Barbeque_detail);
// GET request for list of all Barbeque items.
router.get('/Barbeques', Barbeque_controller.Barbeque_list);

module.exports = router;