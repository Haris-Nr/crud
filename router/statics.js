const router = require("express").Router();
const Input = require("../model/input")


router.get("/", async (req, res) => {
  const allname = await Input.find()
    return res.render("index",{
      data:allname
    });
  });






module.exports = router;
