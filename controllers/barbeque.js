var Barbeque = require('../models/BarbequeSchema');

// List of all Barbeque
exports.Barbeque_list = async function (req, res) {
    // res.send('NOT IMPLEMENTED: Barbeque list');
    try {
        theBarbeques = await Barbeque.find();
        res.send(theBarbeques);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Barbeque.
exports.Barbeque_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Barbeque detail: ' + req.params.id);
};
// Handle Barbeque create on POST.
exports.Barbeque_create_post = async function (req, res) {
    //res.send('NOT IMPLEMENTED: Barbeque create POST');
    console.log(req.body)
    let document = new Barbeque();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.order_name = req.body.order_name;
    document.order_quantity = req.body.order_quantity;
    document.order_price = req.body.order_price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Barbeque delete form on DELETE.
exports.Barbeque_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Barbeque delete DELETE ' + req.params.id);
};
// Handle Barbeque update form on PUT.
exports.Barbeque_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Barbeque update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.Barbeque_view_all_Page = async function (req, res) {
    try {
        theBarbeques = await Barbeque.find();
        res.render('Barbeques', { title: 'Barbeque Search Results', results: theBarbeques });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};