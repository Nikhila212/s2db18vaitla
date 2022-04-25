const mongoose = require("mongoose")
const BarbequeSchema = mongoose.Schema({
    order_name: String,
    order_quantity: { type: String, minLength: 1 },
    order_price: { 
        type: Number,
        min: 10,
        max: 100 
    }
})
module.exports = mongoose.model("Barbeque", BarbequeSchema)  