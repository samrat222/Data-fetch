const mongoose = require("mongoose");

// Define the Schema for the data
const cryptoSchema = new mongoose.Schema({
  name: String,
  last: String,
  buy: String,
  sell: String,
  volume: String,
  base_unit: String,
});

// Create a model based on the schema
module.exports = mongoose.model("Crypto", cryptoSchema);
