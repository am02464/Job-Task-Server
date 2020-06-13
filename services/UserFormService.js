const UserForm = require("./../models/UserForm");


async function returnDeviceIdForms(deviceId)
{
    let userForms = await UserForm.find({deviceId: deviceId}).populate({ path: "form", model:"Form" });
    return userForms;
}

async function returnUserForm(deviceId, userFormId)
{
    let userForm = await UserForm.findOne().populate({ path: "form", model:"Form"}).populate({path: "fields.field"});
    return userForm;
}

module.exports={returnDeviceIdForms, returnUserForm}
