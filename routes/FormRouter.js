const express = require("express");
const router = express.Router();
const formService = require("../services/FormService");
const { route } = require("./UserFormRouter");
const handleImmutable = require("mongoose/lib/helpers/schematype/handleImmutable");

router.get("/", (req, res) => {
    res.json({
        status:"OK"
    })
});

router.post("/:id", (req, res) => {});

router.get("/forms", (req, res) => 
{
    try
    {
        formService.returnAllForms().then(val =>
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

});




router.post("/generate1040", (req,res) => 
{

})

router.put("/", (req, res) => {});

module.exports = router;
