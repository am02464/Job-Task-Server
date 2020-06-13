const UserForm = require("./../models/Form");
const Form = require("./../models/Form");
const handleImmutable = require("mongoose/lib/helpers/schematype/handleImmutable");

async function returnAllForms()
{
    try
    {
        let forms = await Form.find().populate({ path: "fields.field" });
        return forms;    
    }
    catch(e)
    {   
        return e.message;
    }
}

module.exports= 
{
    returnAllForms
}

