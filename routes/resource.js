var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Barbeque_controller = require('../controllers/Barbeque'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// Barbeque ROUTES /// 
 
// POST request for creating a Barbeque.  
router.post('/resource/Barbeques', Barbeque_controller.Barbeque_create_post); 
 
// DELETE request to delete Barbeque. 
router.delete('/resource/Barbeques/:id', Barbeque_controller.Barbeque_delete); 
 
// PUT request to update Barbeque. 
router.put('/resource/Barbeques/:id', 
Barbeque_controller.Barbeque_update_put); 
 
// GET request for one Barbeque. 
router.get('/resource/Barbeques/:id', Barbeque_controller.Barbeque_detail); 
// router.get('/Barbeques/:id', Barbeque_controller.Barbeque_detail);
 
// GET request for list of all Barbeque items. 
router.get('/resource/Barbeques', Barbeque_controller.Barbeque_list); 
 
module.exports = router; 