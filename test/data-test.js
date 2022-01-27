var assert = require("chai").assert;
var indexController = require("../controllers/indexController");

describe("Data tests using CHAI module: ", function () {
  describe("Check getData Function: ", function () {
    it("Check the exist value", async function () {
      result = await indexController.getData();
      assert.exists(result, "[ { file: 'test2.csv'}]");
    });
    it("Check the returned data type ", async function () {
      result = await indexController.getData();
      assert.typeOf(result, "array");
    });
    it("Check the returned data length", async function () {
      result = await indexController.getData();
      assert.lengthOf(result, 4);
    });
  });
});
