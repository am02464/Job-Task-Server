const express = require("express");
const router = express.Router();
const userFormService = require("../services/UserFormService");

router.get("/", (req, res) => {
    res.json({
        status:"OK"
    })
});

router.get("/listforms/:deviceId", (req, res) => 
{    
    try
    {
        userFormService.returnDeviceIdForms(req.params["deviceId"]).then(val =>
            {
                console.log(val);
                res.json(
                    {
                        status: "OK",
                        forms: val
                    })
            })
    
    }
    catch(e)
    {
        console.log(e.message);
    }
})

module.exports = router;
