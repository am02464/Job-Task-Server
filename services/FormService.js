const UserForm = require("./../models/Form");
const Form = require("./../models/Form");

async function returnAllForms()
{
    let forms = await Form.find().populate({ path: "fields.field" });
    console.log(forms)
    return forms;

}

module.exports=[returnAllForms]
