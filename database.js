dbServerUrl =
  "mongodb+srv://richieoscar:payday2018@cluster0.teyrmxo.mongodb.net/todoDB";
dbUrl = "mongodb://localhost:27017/secrets";
const moongoose = require("mongoose");
console.log(dbUrl);
moongoose.connect(dbUrl, { useNewUrlParser: true });

SecretSchema = () => {
  return new moongoose.Schema({
    name: String,
  });
};

exports.secretModel = () => {
  return moongoose.model("Secret", SecretSchema());
};




