const connection = require("./service/dbConnect");

connection().then(() => {
  console.log("Server running. Use our API on port: 3000");
});
