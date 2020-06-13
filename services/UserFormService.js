const UserForm = require("./../models/UserForm");


async function returnDeviceIdForms(deviceId)
{
    let userForms = await UserForm.find({deviceId: deviceId}).populate({ path: "form", model:"Form" });
    return userForms;
}

async function returnUserForm(deviceId, userFormId)
{
    let userForm = await UserForm.findOne({deviceId: deviceId, form: userFormId}).populate({ path: "form", model:"Form" });
    return userForm;

}


module.exports={returnDeviceIdForms, returnUserForm}

