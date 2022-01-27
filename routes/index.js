var express = require("express");
var router = express.Router();
const data = require("../controllers/indexController");
/* GET home page. */
router.get("/data", async (req, res, next) => {
  const {fileName} = req.query
  const result = await data.getData(fileName);
  res.json(result);
});

router.get("/list", async (req, res, next) => {
  const result = await data.getList();
  res.json(result);
});

module.exports = router;
