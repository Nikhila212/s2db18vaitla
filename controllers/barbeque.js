var barbeque = require('../models/barbeque');
// List of all barbeques
exports.barbeque_list = function(req, res) {
res.send('NOT IMPLEMENTED: barbeque list');
};
// for a specific barbeque.
exports.barbeque_detail = function(req, res) {
res.send('NOT IMPLEMENTED: barbeque detail: ' + req.params.id);
};
// Handle barbeque create on POST.
exports.barbeque_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: barbeque create POST');
};
// Handle barbeque delete form on DELETE.
exports.barbeque_delete = function(req, res) {
res.send('NOT IMPLEMENTED: barbeque delete DELETE ' + req.params.id);
};
// Handle barbeque update form on PUT.
exports.barbeque_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: barbeque update PUT' + req.params.id);
};