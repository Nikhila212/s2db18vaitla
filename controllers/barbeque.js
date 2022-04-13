var barbeque = require('../models/barbequeSchema');

// List of all items
exports.barbeque_list = async function (req, res) {
    // res.send('NOT IMPLEMENTED: Barbeque list');
    try {
        theBarbeque = await barbeque.find();
        res.send(theBarbeque);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Barbeque.
exports.barbeque_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: barbeque detail: ' + req.params.id);
};
// Handle Barbeque create on POST.
exports.barbeque_create_post = async function (req, res) {
    res.send('NOT IMPLEMENTED: Barbeque create POST');
};
// Handle Barbeque delete form on DELETE.
exports.barbeque_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: barbeque delete DELETE ' + req.params.id);
};
// Handle Barbeque update form on PUT.
exports.barbeque_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Barbeque update PUT' + req.params.id);
};
