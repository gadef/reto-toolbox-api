const axios = require("axios");

class indexController {
  async getData(fileName) {
    try {
      let result = [];
      if (fileName) {
        result.push(fileName);
      } else {
        const resp = await axios.get(
          "https://echo-serv.tbxnet.com/v1/secret/files",
          { headers: { Authorization: `Bearer aSuperSecretKey` } }
        );
        result = resp.data.files;
      }

      let respAll = [];
      let valide = "";
      let contentVal = {};
      await Promise.all(
        result.map(async (element) => {
          try {
            let respData = await axios.get(
              `https://echo-serv.tbxnet.com/v1/secret/file/${element}`,
              { headers: { Authorization: `Bearer aSuperSecretKey` } }
            );
            let resultData = respData.data;

            let countData = resultData.split("\n");

            countData.shift();
            await countData.map((elementc) => {
              let count = elementc.split(",");

              if (count.length == 4) {
                if (valide == count[0]) {
                  contentVal.lines.push({
                    text: count[1],
                    number: count[2],
                    hex: count[3],
                  });
                } else {
                  if (Object.keys(contentVal).length > 0) {
                    respAll.push(contentVal);
                  }
                  contentVal = {};
                  contentVal = {
                    file: count[0],
                    lines: [
                      {
                        text: count[1],
                        number: count[2],
                        hex: count[3],
                      },
                    ],
                  };

                  valide = count[0];
                }
              }
            });
          } catch (error) {
            // console.log(`ERROR: ${element}`);
            // console.log(`ERROR: ${error}`);
          }
        })
      );
      if (Object.keys(contentVal).length > 0) {
        respAll.push(contentVal);
      }
      return respAll;
    } catch (err) {
      // console.error(err);
    }
  }

  async getList() {
    try {
      const resp = await axios.get(
        "https://echo-serv.tbxnet.com/v1/secret/files",
        { headers: { Authorization: `Bearer aSuperSecretKey` } }
      );
      return resp.data.files;
    } catch (err) {
      // console.error(err);
    }
  }
}

module.exports = new indexController();
