const StatusTable = require("../models/Status");

const UploadStatus = async (req, res) => {
  console.log(req.body);
  console.log("===============================");

  await StatusTable.create({
    name: req.body.name,

    email: req.body.email,
    url: req.body.url,
    createdAt: Date(),
  }).then(console.log("status created"));

  res.json("*******************status saved ******************************");
};

module.exports = { UploadStatus };
