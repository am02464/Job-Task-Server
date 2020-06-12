const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        status:"OK"
    })
});

router.post("/:id", (req, res) => {});

router.put("/", (req, res) => {});

module.exports = router;
