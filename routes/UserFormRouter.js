const express = require("express");
const router = express.Router();
const userFormService = require("../services/UserFormService");

router.get("/", (req, res) => {
  res.json({
    status: "OK",
  });
});

router.get("/:deviceId/:userFormId/", (req, res) => {
  try {
    userFormService
      .returnUserForm(req.params["deviceId"], req.params["userFormId"])
      .then((val) => {
        console.log(val);
        res.json({
          status: "OK",
          form: val,
        });
      });
  } catch (e) {}
});

module.exports = router;
