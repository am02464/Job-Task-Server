const express = require("express");
const router = express.Router();
const formServive = require("../services/FormService");

router.get("/", (req, res) => {
    res.json({
        status:"OK"
    })
});

router.post("/:id", (req, res) => {});

router.get("/allforms", (req, res) => 
{
    formServive[0]().then(val =>
        {
            console.log(val);
            res.json(
                {
                    status: "OK",
                    forms: val
                })
        })

});


router.put("/", (req, res) => {});

module.exports = router;
