const mongoose = require("mongoose")
const barbequeSchema = mongoose.Schema({
Order_name: String,
Order_quantity: String,
Order_price: Number
})
module.exports = mongoose.model("Barbeque",barbequeSchema)