const mongoose = require("mongoose");
const Form = require("./Form");
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
  },
  value: {
    type: String,
    required: true
  }
});

let userFormSchema = new Schema({
  deviceId: {
    type: String,
    required: true
  },
  form: { type: Schema.Types.ObjectId, ref: "Form", required: true },
  fields: {
    type: [fieldsSchema],
    validate: [fieldsLimitValidator, "{PATH} Must have All required fields"]
  }
});

function fieldsLimitValidator(vals, some) {
  // it has access to current instance so we can validate it easily
  return vals.length > 0;
}

const UserForm = mongoose.model("UserForm", userFormSchema);
module.exports = UserForm;

// let userForm = new UserForm({
//   deviceId: "1234",
//   form: "5ee39d2e5fe4e641c03a53c4"
// });

// userForm.save((err, val) => {
//   console.log(err, val);
// });
// // mongoose.connection.dropCollection("UserForm")