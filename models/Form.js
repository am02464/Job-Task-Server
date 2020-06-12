const mongoose = require("mongoose");

const FieldType = require("./FieldType");
const Schema = mongoose.Schema;


let fieldsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  field: {
    type: Schema.Types.ObjectId,
    ref: "FieldType",
    required: true
  }
});


let formSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  fields: {
    type: [fieldsSchema],
    validate: [fieldsLimitValidator, "{PATH} Must have at least one field"]
  }
});

function fieldsLimitValidator(vals) {
  return vals.length > 0;
}

const Form = mongoose.model("Form", formSchema);
module.exports = Form;


