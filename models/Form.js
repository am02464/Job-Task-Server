const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let formSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  fields: {
    type: [{ type: Schema.Types.ObjectId, ref: "FieldType", required: true }],
    validate: [fieldsLimitValidator, "{PATH} Must have at least one field"]
  }
});

function fieldsLimitValidator(vals) {
  return vals.length > 0;
}
const Form = mongoose.model("Form", formSchema);
module.exports = Form;

let form = new Form({
  name: "0140",
  fields:['5ee39cb8e4acad2da4165e30']
});

Form.find().populate('fields').exec((err, val)=>{
  console.log(err, val.pop())
})