const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let formSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  fields: [{ type: Schema.Types.ObjectId, ref: "FieldType" }]
});

module.exports = mongoose.model("Form", formSchema);
