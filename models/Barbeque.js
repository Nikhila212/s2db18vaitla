const mongoose = require("mongoose")
const BarbequeSchema = mongoose.Schema({
order_name: String,
order_quantity: String,
order_price: Number
})
module.exports = mongoose.model("Barbeque",BarbequeSchema)