const UserForm = require("./../models/UserForm");


async function returnDeviceIdForms(deviceId)
{
    let userForms = await UserForm.find({deviceId: deviceId}).populate({ path: "form", model:"Form" });
    return userForms;
}


module.exports=[returnDeviceIdForms]

