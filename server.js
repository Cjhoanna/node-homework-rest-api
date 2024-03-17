const app = require("./app");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
require("dotenv").config();
const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;

const connection = mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(`server not running.Error message: ${error.message}`);
    process.exit(1);
  });
