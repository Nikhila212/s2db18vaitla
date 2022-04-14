var express = require("express");
const Barbeque_controlers = require("../controllers/Barbeque");
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET restaurants */
router.get("/", Barbeque_controlers.Barbeque_view_all_Page);
module.exports = router;
/* GET detail Barbeque page */ 
router.get('/detail', Barbeque_controlers.Barbeque_view_one_Page); 
/* GET create Barbeque page */ 
router.get('/create', secured, Barbeque_controlers.Barbeque_create_Page); 
/* GET create update page */ 
router.get('/update', secured, Barbeque_controlers.Barbeque_update_Page); 
/* GET create Barbeque page */ 
router.get('/delete', Barbeque_controlers.Barbeque_delete_Page);