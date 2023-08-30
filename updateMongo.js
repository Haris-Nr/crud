const getData = require("./mongodb");

const updateData = async () => {
  let data = await getData();
  let result = await data.updateOne({ name: "note" }, { $set: { name: "maxpro" } });
  console.log(result);
};

updateData();
