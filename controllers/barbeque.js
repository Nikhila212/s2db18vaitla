var Barbeque = require('../models/Barbeque');
// List of all Barbeque
exports.Barbeque_list = async function(req, res) {
    try{
    theBarbeque = await Barbeque.find();
    res.send(theBarbeque);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    res.status(500);
    }
    };
// for a specific barbeque.
exports.Barbeque_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Barbeque.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Costume create on POST.
exports.Barbeque_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Barbeque();
    document.order_name = req.body.order_name;
    document.order_quantity = req.body.order_quantity;
    document.order_price = req.body.order_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
};
// Handle Costume delete form on DELETE.
exports.Barbeque_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Barbeque.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Costume update form on PUT.
exports.Barbeque_update_put = async function (req, res) {
    //res.send('NOT IMPLEMENTED: Barbeque update PUT' + req.params.id);
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Barbeque.findById(req.params.id)
        // Do updates of properties
        if (req.body.order_name)
            toUpdate.order_name = req.body.order_name;
        if (req.body.order_quantity) toUpdate.order_quantity = req.body.order_quantity;
        if (req.body.order_price) toUpdate.order_price = req.body.order_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// VIEWS
// Handle a show all view
exports.Barbeque_view_all_Page = async function(req, res) {
    try{
    theBarbeque = await Barbeque.find();
    res.render('Barbeque', { title: 'Barbeque Search Results', results: theBarbeque });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
