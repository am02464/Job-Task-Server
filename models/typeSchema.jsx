var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let validTypes = require("./allowedTypes");

var typeSchema = new Schema({
  typeDisplay: {
    type: String,
    enum: validTypes,
  },
});

const FieldType = mongoose.model("FieldType", typeSchema);
module.exports = FieldType;
