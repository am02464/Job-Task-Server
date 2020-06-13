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
    console.log('asdsadas')
    userFormService[0](req.params["deviceId"]).then(val =>
        {
            console.log(val);
            res.json(
                {
                    status: "OK",
                    forms: val
                })
        })
})

module.exports = router;
